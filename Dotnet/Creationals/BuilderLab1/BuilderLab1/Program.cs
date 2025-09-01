using BuilderLab1.Builders;
using System;

namespace BuilderLab1;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Start==");
        var c = new ComputerBuilder().setCpu("AMD R9").setMemory("32GB").setDisk("1TB").setGpu("NVIDIA 2070").build();
        c.displayConfiguration();
    }
}