using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace registerPatternLab1;
public class RegistrationService<T> where T : class, IRegistrationService
{
    private readonly ConcurrentDictionary<string, T> _registry = new();

    public int Count => _registry.Count;
    //public int Count()
    //{
    //    return _registry.Count;
    //}
    
    public bool Register(T item)
    {
        if(item == null)
            throw new ArgumentNullException(nameof(item));

        return _registry.TryAdd(item.Id, item);
    }

    public bool Unregister(string id)
    {
        return _registry.TryRemove(id, out _);
    }

    public T? Get(string id)
    {
        // one way to do it
        //return _registry[id];

        // another way to do return the requested item
        _registry.TryGetValue(id, out T? item);
        return item;
    }

    public IEnumerable<T> GetAll()
    {
        return _registry.Values;
    }

    public bool IsRegistered(string id)
    {
        return _registry.ContainsKey(id);
    }

    public void Clear()
    {
        _registry.Clear();
    }

}

