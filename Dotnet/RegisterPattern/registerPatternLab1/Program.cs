
using registerPatternLab1.Services;

namespace registerPatternLab1;

public class Program
{
    static async Task Main(string[] args)
    {
        Console.WriteLine("===registry pattern");

        await testRegistry();
    }

    public static async Task testRegistry()
    {
        var registryService = new RegistrationService<IService>();

        var emailService = new EmailService();
        var smsService = new SmsService();
        var logService = new LoggingService();

        registryService.Register(emailService);
        registryService.Register(smsService);
        registryService.Register(logService);

        foreach (var s in registryService.GetAll())
        {
            Console.WriteLine(s.Id + " - " + s.Description);
        }

        var emailRes = await registryService.Get("email-service")?.ExecuteAsync("test");
        Console.WriteLine("emailRes: " + emailRes);

        registryService.Unregister("email-service");

        var emailServiceRegistered = registryService.Get("email-service");
        var resultFromEmailServiceTest = emailServiceRegistered == null ? "service is not registered or doesnt exist" : "service exist";
        Console.WriteLine(resultFromEmailServiceTest);

        // todo: instead of ExecuteAsync, use HandleAsync

    }
}
