using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuilderLab1.Entities;
public class Computer
{
    public string Cpu { get; set; } = "cpu not defined yet";
    public string Memory { get; set; } = "memory not defined yet";
    public string Disk { get; set; } = "disk not defined yet";
    public string Gpu { get; set; } = "gpu not defined yet";

    public void displayConfiguration()
    {
        Console.WriteLine($" computer Configuration \n" +
            $"CPU: {Cpu} \n" +
            $"Memory: {Memory} \n" +
            $"Gpu: {Gpu} \n" +
            $"Disk: {Disk}  \n");
    }
}
