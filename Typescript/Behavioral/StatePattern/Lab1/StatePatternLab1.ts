import { COLORS } from "../../../COLORS"

interface State {
    name: string;

    move(): void;
    stop(): void;
}

class Vehicle {
    private state: State;

    constructor() {
        this.state = new StoppingVehicle(this);
    }

    moving() {

    }

    stopping() {

    }
}

// States
class MovingVehicle implements State {
    name: string;
    private vehicle: Vehicle;

    constructor(vehicle: Vehicle) {
        this.vehicle = vehicle;
    }

    move(): void {
        console.log("vehicle moving...");
        
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }

}

class StoppingVehicle implements State {
    name: string;
    private vehicle: Vehicle;

    constructor(vehicle: Vehicle) {
        this.vehicle = vehicle;
    }


    move(): void {
        console.log("vehicle stopping...");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }

}


export class StatePatternLab1 {

    exec() {
        
    }
}

