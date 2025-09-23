using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace registerPatternLab1.Services;
public class SmsService : IService
{
    public string Id => "sms-service";
    public string Description => "Handles sms operations";
    public async Task<string> ExecuteAsync(string input)
    {
        await Task.Delay(1000);
        return $"SMS sent: {input}";
    }
}

