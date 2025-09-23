using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace registerPatternLab1.Services;
public class EmailService : IService
{
    public string Id => "email-service";
    public string Description => "Handles email operations";
    public async Task<string> ExecuteAsync(string input)
    {
        await Task.Delay(1000);
        return $"Email sent: {input}";
    }
}

