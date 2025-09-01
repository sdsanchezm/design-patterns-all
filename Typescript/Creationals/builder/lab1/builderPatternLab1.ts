//  * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
//  * * y queremos que el proceso de construcción sea independiente de las partes
//  * * que lo componen.

class RaspBerryPi {
    public cpu: string = "cpu is not defined yet";
    public memory: string = "memory is not defined yet";
    public disk: string = "disk is not defined yet";
    public gpu: string = "gpu is not defined yet";

    displayConfiguration(){
        console.log(`general config:
            cpu: ${this.cpu}
            memory: ${this.memory}
            disk: ${this.disk}
            gpu: ${this.gpu}
            `);
    }
}

export class RaspberryPiBuilder {
    private raspberry: RaspBerryPi;

    constructor(){
        this.raspberry = new RaspBerryPi();
    }

    setCpu(cpu: string): RaspberryPiBuilder {
        this.raspberry.cpu = cpu;
        return this;
    }

    setMemory(memory: string): RaspberryPiBuilder {
        this.raspberry.memory = memory;
        return this;
    }

    setDisk(disk: string): RaspberryPiBuilder {
        this.raspberry.disk = disk;
        return this;
    }

    setGpu(gpu: string): RaspberryPiBuilder {
        this.raspberry.gpu = gpu;
        return this;
    }

    build() {
        return this.raspberry;
    }

    exec(){
        const rpi = new RaspberryPiBuilder().setCpu("intel").setMemory("32 GB").setDisk("16GB").setGpu("Nvidia 8gb").build();
        rpi.displayConfiguration();
    }
}