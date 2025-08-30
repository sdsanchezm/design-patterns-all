//  * * Es útil cuando se tiene un algoritmo que sigue una secuencia de pasos
//  * * y se quiere permitir a las subclases que redefinan algunos de esos pasos.

abstract class VehicleCleaning {
    clean(): void {
        this.enterCar();
        this.collectTrash();
        this.specificVacuuming();
        this.disinfection();
        this.exitCar();
    }

    private enterCar() {
        console.log("entered vehicle, and ready...");
    }

    private collectTrash() {
        console.log("trash was collected...");
    }

    private specificVacuuming() {
        console.log("vacuuming completed...");
    }

    protected abstract disinfection(): void;
    protected abstract exitCar(): void;
}

class CoupeCarCleaning extends VehicleCleaning {
    protected disinfection(): void {
        console.log("car disinfection completed...");
    }
    protected exitCar(): void {
        console.log("exited car.");
    }
}

class TruckCleaning extends VehicleCleaning {
    protected disinfection(): void {
        console.log("truck disinfection completed...");
    }
    protected exitCar(): void {
        console.log("exited truck.");
    }
}

export class templateMethodPatternLab2 {
    static exec() {
        const p1 = new CoupeCarCleaning();
        p1.clean();

        const p2 = new TruckCleaning();
        p2.clean();
    }
}
