using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace registerPatternLab1.Services;
public class LoggingService : IService
{
    public string Id => "logging-service";
    public string Description => "Handles logging operations";
    public async Task<string> ExecuteAsync(string input)
    {
        await Task.Delay(100);
        return $"{DateTime.Now:HH:mm:ss} LOG: {input}";
    }
}
