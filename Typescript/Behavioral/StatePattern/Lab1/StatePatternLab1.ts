import { COLORS } from "../../../COLORS"

export const sleepTime = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
        this.state.move();
    }

    stopping() {
        this.state.stop();
    }

    setState(newState: State) {
        this.state = newState;
        console.log(`new state: %c${this.state.name}`, COLORS.orange);
    }

    getStateName() {
        return this.state.name;
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
        console.log("vehicle is moving, can't stop now...");
    }
}

class StoppingVehicle implements State {
    name: string;
    private vehicle: Vehicle;

    constructor(vehicle: Vehicle) {
        this.vehicle = vehicle;
    }

    move(): void {
        console.log("vehicle is stopped, can't move right now...");
    }
    stop(): void {
        console.log("vehicle stopped");
    }
}


export class StatePatternLab1 {

    async exec() {
        const vehicle = new Vehicle();

        let selectedOption: string | null = '3';

        do {
            console.clear();
            console.log(`Pick an option: %c${vehicle.getStateName()}`, COLORS.blue);

            selectedOption = prompt(
                `
        1. Stop
        2. Move
        3. Exit

        option: `
            );

            switch (selectedOption) {
                case '1':
                    vehicle.stopping();
                    break;
                case '2':
                    vehicle.moving();
                    break;
                case '3':
                    console.log('Exiting...');
                    break;
                default:
                    console.log('Invalid option');
            }

            await sleepTime(2000);
        } while (selectedOption !== '3');
    }
}


