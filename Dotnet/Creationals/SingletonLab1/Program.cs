using SingletonLab1.UtilityClasses;
using System;

namespace SingletonLab1;
public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Start==");

        var a = DatabaseConnection.GetInstance();
        a.GetCallsOfInstance();

        var b = DatabaseConnection.GetInstance();
        b.GetCallsOfInstance();
        
        var c = DatabaseConnection.GetInstance();
        c.GetCallsOfInstance();
        
    }
}