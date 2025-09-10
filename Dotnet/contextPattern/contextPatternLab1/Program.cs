using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace contextPatternLab1;

public class Program
{
    public static async Task Main(string[] args)
    {
        // Create a context for file operations
        var context = new FileOperationContext(@"C:\temp\myapp", "user123");
        context.Metadata["SessionId"] = Guid.NewGuid().ToString();

        // Create file service with the context
        var fileService = new FileService(context);

        try
        {
            // Write a file
            await fileService.WriteFileAsync("data/sample.txt", "Hello, World!");
            Console.WriteLine("File written successfully");

            // Read the file
            var content = await fileService.ReadFileAsync("data/sample.txt");
            Console.WriteLine($"File content: {content}");

            // Get file information
            var fileInfo = fileService.GetFileInfo("data/sample.txt");
            Console.WriteLine($"File size: {fileInfo.Length} bytes");
            Console.WriteLine($"Created: {fileInfo.CreationTime}");

            // List files
            var files = fileService.ListFiles("data");
            Console.WriteLine($"Files found: {string.Join(", ", files)}");

            // Read the log file to see operations
            if (File.Exists(context.LogFilePath))
            {
                var logContent = await File.ReadAllTextAsync(context.LogFilePath);
                Console.WriteLine("\nOperation Log:");
                Console.WriteLine(logContent);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
        }
    }
}



// Context class that encapsulates file operation settings and metadata
public class FileOperationContext
{
    public string BaseDirectory { get; set; }
    public string LogFilePath { get; set; }
    public bool EnableLogging { get; set; }
    public string UserId { get; set; }
    public DateTime OperationStartTime { get; set; }
    public Dictionary<string, object> Metadata { get; set; }

    public FileOperationContext(string baseDirectory, string userId)
    {
        BaseDirectory = baseDirectory;
        UserId = userId;
        LogFilePath = Path.Combine(baseDirectory, "operations.log");
        EnableLogging = true;
        OperationStartTime = DateTime.Now;
        Metadata = new Dictionary<string, object>();
    }

    // Helper method to get full path relative to base directory
    public string GetFullPath(string relativePath)
    {
        return Path.Combine(BaseDirectory, relativePath);
    }

    // Helper method to log operations
    public void LogOperation(string operation, string filePath, bool success = true)
    {
        if (!EnableLogging) return;

        var logEntry = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] User: {UserId} | Operation: {operation} | File: {filePath} | Success: {success}";

        try
        {
            File.AppendAllText(LogFilePath, logEntry + Environment.NewLine);
        }
        catch
        {
            // Silently handle logging errors
        }
    }
}

// Service class that uses the context for file operations
public class FileService
{
    private readonly FileOperationContext _context;

    public FileService(FileOperationContext context)
    {
        _context = context;
    }

    public async Task<string> ReadFileAsync(string relativePath)
    {
        var fullPath = _context.GetFullPath(relativePath);

        try
        {
            if (!File.Exists(fullPath))
            {
                _context.LogOperation("READ", relativePath, false);
                throw new FileNotFoundException($"File not found: {relativePath}");
            }

            var content = await File.ReadAllTextAsync(fullPath);
            _context.LogOperation("READ", relativePath);
            return content;
        }
        catch (Exception ex)
        {
            _context.LogOperation("READ", relativePath, false);
            throw;
        }
    }

    public async Task WriteFileAsync(string relativePath, string content)
    {
        var fullPath = _context.GetFullPath(relativePath);

        try
        {
            // Ensure directory exists
            var directory = Path.GetDirectoryName(fullPath);
            if (!Directory.Exists(directory))
            {
                Directory.CreateDirectory(directory);
            }

            await File.WriteAllTextAsync(fullPath, content);
            _context.LogOperation("WRITE", relativePath);
        }
        catch (Exception ex)
        {
            _context.LogOperation("WRITE", relativePath, false);
            throw;
        }
    }

    public void DeleteFile(string relativePath)
    {
        var fullPath = _context.GetFullPath(relativePath);

        try
        {
            if (File.Exists(fullPath))
            {
                File.Delete(fullPath);
                _context.LogOperation("DELETE", relativePath);
            }
            else
            {
                _context.LogOperation("DELETE", relativePath, false);
                throw new FileNotFoundException($"File not found: {relativePath}");
            }
        }
        catch (Exception ex)
        {
            _context.LogOperation("DELETE", relativePath, false);
            throw;
        }
    }

    public string[] ListFiles(string relativePath = "")
    {
        var fullPath = _context.GetFullPath(relativePath);

        try
        {
            if (!Directory.Exists(fullPath))
            {
                _context.LogOperation("LIST", relativePath, false);
                return new string[0];
            }

            var files = Directory.GetFiles(fullPath);
            // Convert back to relative paths
            for (int i = 0; i < files.Length; i++)
            {
                files[i] = Path.GetRelativePath(_context.BaseDirectory, files[i]);
            }

            _context.LogOperation("LIST", relativePath);
            return files;
        }
        catch (Exception ex)
        {
            _context.LogOperation("LIST", relativePath, false);
            throw;
        }
    }

    public FileInfo GetFileInfo(string relativePath)
    {
        var fullPath = _context.GetFullPath(relativePath);

        try
        {
            var fileInfo = new FileInfo(fullPath);
            if (!fileInfo.Exists)
            {
                _context.LogOperation("INFO", relativePath, false);
                throw new FileNotFoundException($"File not found: {relativePath}");
            }

            _context.LogOperation("INFO", relativePath);
            return fileInfo;
        }
        catch (Exception ex)
        {
            _context.LogOperation("INFO", relativePath, false);
            throw;
        }
    }
}

// Alternative: Using dependency injection with scoped context
public class FileOperationContextFactory
{
    public FileOperationContext CreateContext(string userId, string operation)
    {
        var baseDir = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "MyApp");
        var context = new FileOperationContext(baseDir, userId);
        context.Metadata["Operation"] = operation;
        return context;
    }
}

// Example with multiple contexts for different operations
public class DocumentManager
{
    public async Task ProcessUserDocuments(string userId)
    {
        // Create different contexts for different document types
        var personalContext = new FileOperationContext(
            Path.Combine(@"C:\Documents", userId, "Personal"), userId);
        var workContext = new FileOperationContext(
            Path.Combine(@"C:\Documents", userId, "Work"), userId);

        var personalFileService = new FileService(personalContext);
        var workFileService = new FileService(workContext);

        // Process personal documents
        await personalFileService.WriteFileAsync("notes.txt", "Personal notes...");

        // Process work documents  
        await workFileService.WriteFileAsync("report.txt", "Work report...");

        Console.WriteLine("Documents processed for user: " + userId);
    }
}