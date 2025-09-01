using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonLab1.UtilityClasses;
public class DatabaseConnection
{
    private static DatabaseConnection instanceObj = null;
    private static int numberOfCalls = 0;
    private DatabaseConnection()
    {
        //instance = new DatabaseConnection();
    }

    public static DatabaseConnection GetInstance()
    {
        numberOfCalls++;
        Console.WriteLine(numberOfCalls);
        if (instanceObj == null)
        {
            instanceObj = new DatabaseConnection();
        }
        
        return instanceObj;
    }

    public void GetCallsOfInstance()
    {
        Console.WriteLine($"calls: {numberOfCalls}");
    }
}
