using BuilderLab1.Entities;

namespace BuilderLab1.Builders;
public class ComputerBuilder
{
    private Computer computer;

    public ComputerBuilder()
    {
        computer = new Computer();
    }

    public ComputerBuilder setCpu(string cpu)
    {
        computer.Cpu = cpu;
        return this;
    }

    public ComputerBuilder setMemory(string memory)
    {
        computer.Memory = memory;
        return this;
    }

    public ComputerBuilder setDisk(string disk)
    {
        computer.Disk = disk;
        return this;
    }

    public ComputerBuilder setGpu(string gpu)
    {
        computer.Gpu = gpu;
        return this;
    }

    public Computer build() 
    { 
        return computer;
    }

}
