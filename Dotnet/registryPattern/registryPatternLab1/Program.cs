using System;
using System.Collections.Generic;
using System.Collections.Concurrent;

namespace registryPatternLab1;
public class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("registryPatternLab1==");

        // usage 
        //RegistryExample.DemonstrateBasicRegistry();

        // usage 
        RegistryExample.DemonstrateTypedRegistry();
    }
}

public class Registry
{
    private static readonly Lazy<Registry> _instance = new Lazy<Registry>(() => new Registry());
    private readonly ConcurrentDictionary<string, object> _objects;

    private Registry()
    {
        _objects = new ConcurrentDictionary<string, object>();
    }

    public static Registry Instance => _instance.Value;

    public void Register<T>(string key, T obj)
    {
        if (string.IsNullOrWhiteSpace(key))
            throw new ArgumentException("Key cannot be null or empty", nameof(key));

        _objects.AddOrUpdate(key, obj, (k, v) => obj);
    }

    public T Get<T>(string key)
    {
        if (_objects.TryGetValue(key, out var obj) && obj is T)
        {
            return (T)obj;
        }
        throw new KeyNotFoundException($"Object with key '{key}' not found or not of type {typeof(T).Name}");
    }

    public bool TryGet<T>(string key, out T result)
    {
        result = default(T);
        if (_objects.TryGetValue(key, out var obj) && obj is T)
        {
            result = (T)obj;
            return true;
        }
        return false;
    }

    public void Unregister(string key)
    {
        _objects.TryRemove(key, out _);
    }

    public bool Contains(string key)
    {
        return _objects.ContainsKey(key);
    }
}

public class TypedRegistry
{
    private static readonly Lazy<TypedRegistry> _instance = new Lazy<TypedRegistry>(() => new TypedRegistry());
    private readonly ConcurrentDictionary<Type, object> _objects;

    private TypedRegistry()
    {
        _objects = new ConcurrentDictionary<Type, object>();
    }

    public static TypedRegistry Instance => _instance.Value;

    public void Register<T>(T obj)
    {
        _objects.AddOrUpdate(typeof(T), obj, (k, v) => obj);
    }

    public T Get<T>()
    {
        if (_objects.TryGetValue(typeof(T), out var obj) && obj is T)
        {
            return (T)obj;
        }
        throw new InvalidOperationException($"No instance of type {typeof(T).Name} registered");
    }

    public bool TryGet<T>(out T result)
    {
        result = default(T);
        if (_objects.TryGetValue(typeof(T), out var obj) && obj is T)
        {
            result = (T)obj;
            return true;
        }
        return false;
    }
}

public interface IConfigurationService
{
    string GetConnectionString();
}

public class ConfigurationService : IConfigurationService
{
    public string GetConnectionString()
    {
        return "Server=localhost;Database=MyApp;";
    }
}

public interface ILogger
{
    void Log(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[LOG]: {message}");
    }
}

public class RegistryExample
{
    public static void DemonstrateBasicRegistry()
    {
        var registry = Registry.Instance;

        registry.Register("config", new ConfigurationService());
        registry.Register("logger", new ConsoleLogger());
        registry.Register("app-name", "My Application");

        var configService = registry.Get<IConfigurationService>("config");
        var logger = registry.Get<ILogger>("logger");
        var appName = registry.Get<string>("app-name");

        logger.Log($"Starting {appName}");
        logger.Log($"Connection string: {configService.GetConnectionString()}");
    }

    public static void DemonstrateTypedRegistry()
    {
        var registry = TypedRegistry.Instance;

        registry.Register<IConfigurationService>(new ConfigurationService());
        registry.Register<ILogger>(new ConsoleLogger());

        var configService = registry.Get<IConfigurationService>();
        var logger = registry.Get<ILogger>();

        logger.Log("Using typed registry");
        logger.Log($"Connection: {configService.GetConnectionString()}");
    }
}

public static class ServiceLocator
{
    private static readonly Registry _registry = Registry.Instance;

    public static void RegisterService<T>(string key, T service)
    {
        _registry.Register(key, service);
    }

    public static T GetService<T>(string key)
    {
        return _registry.Get<T>(key);
    }

    public static T GetService<T>() where T : class
    {
        var key = typeof(T).Name;
        return _registry.Get<T>(key);
    }
}