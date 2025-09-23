using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace registerPatternLab1.Services;
public interface IService : IRegistrationService
{
    Task<string> ExecuteAsync(string input);
}
