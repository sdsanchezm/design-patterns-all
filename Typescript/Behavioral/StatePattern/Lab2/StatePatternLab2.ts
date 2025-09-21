import { COLORS } from "../../../Utils/COLORS";
import { sleepTime } from "../Lab1/StatePatternLab1";

// State Interface
interface IState {
    name: string;

    open(): void;
    close(): void;
}
// States Implementation from Interface
// State 1 - Closed
class Closed implements IState {
    private door: AutomaticDoor;
    public name: string;

    constructor(door: AutomaticDoor) {
        this.door = door;
        this.name = "Closed";
    }

    open(): void {
        console.log('oppening the door...');
        this.door.setState(new Opening(this.door));
    }

    close(): void {
        console.log('door is already closed');
    }
}

// State 2 - Oppening
class Opening implements IState {
    public name: string;
    private door: AutomaticDoor;

    constructor(door: AutomaticDoor) {
        this.door = door;
        this.name = "Oppening";

        this.afterOpen();
    }

    private async afterOpen() {
        await sleepTime(2000);

        console.log('door has opened.');
        this.door.setState(new Open(this.door));
    }

    open(): void {
        console.log('door is oppening already');
    }

    close(): void {
        console.log('door cant be closed while its oppening');
    }
}

// State 3 - Open
class Open implements IState {
    private door: AutomaticDoor;
    public name: string;

    constructor(door: AutomaticDoor) {
        this.door = door;
        this.name = 'Oppened';
    }

    open(): void {
        console.log('door is openned already');
    }

    close(): void {
        console.log('closing the door');
        this.door.setState(new Closing(this.door));
    }
}

// State 4 - Closing
class Closing implements IState {
    private door: AutomaticDoor;
    public name: string;

    constructor(door: AutomaticDoor) {
        this.door = door;
        this.name = 'Closing';

        this.afterClosed();
    }

    private async afterClosed() {
        await sleepTime(2000);
        console.log("door has been closed");
        this.door.setState(new Closed(this.door));
    }

    open(): void {
        console.log('cancelling closing, oppening the door again');
        this.door.setState(new Opening(this.door));
    }

    close(): void {
        console.log('door is closing');
        this.door.setState(new Closed(this.door));
    }
}

// Clase Context - AutomaticDoor
class AutomaticDoor {
    private state: IState;

    constructor() {
        this.state = new Closed(this);
    }

    setState(state: IState): void {
        this.state = state;
        console.log(`%cState changed to: %c${state.name}`, COLORS.orange, COLORS.blue);
    }

    open(): void {
        this.state.open();
    }

    close(): void {
        this.state.close();
    }

    getStateName(): string {
        return this.state.name;
    }
}

export class StatePatternLab2 {
    async exec() {

        const door = new AutomaticDoor();

        let selectedOption: string | null = '3';

        do {
            console.clear();
            console.log(`Actual state: %c${door.getStateName()}`, COLORS.orange);
            selectedOption = prompt(`
      1. open door
      2. close door
      3. exit

      pick an option: 
    `);

            switch (selectedOption) {
                case '1':
                    door.open();
                    break;
                case '2':
                    door.close();
                    break;
                case '3':
                    console.log('exiting...');
                    break;
                default:
                    console.log('invalid option.');
                    break;
            }

            await sleepTime(1000);
        } while (selectedOption !== '3');
    }
}
