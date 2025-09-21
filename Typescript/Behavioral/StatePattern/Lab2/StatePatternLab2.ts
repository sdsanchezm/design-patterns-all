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

    open(): void {
        console.log('oppening the door...');
        this.door.setState(new Opening(this.door));
    }

    close(): void {
        console.log('door is closed already');
    }
}

// State 2 - Oppening
class Opening implements IState {
    public name: string;
    private door: AutomaticDoor;

    constructor(door: AutomaticDoor) {
        //TODO: asignar door y name = Abriendo
        this.afterOpen();
    }

    private async afterOpen() {
        await sleepTime(3000);

        console.log('La puerta se ha abierto.');
        // TODO: Implementar lógica para abrir la puerta (Open)
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
        this.name = 'Abierta';
    }

    open(): void {
        console.log('door is openned already');
    }

    close(): void {
        console.log('closing the door');
        // TODO: Implementar lógica para cerrar la puerta (Closing)
    }
}

// State 4 - Closing
class Closing implements IState {
    public name: string;

    constructor(door: AutomaticDoor) {
        this.door = door;
        this.name = 'Closing';
    }

    open(): void {
        console.log('detecting movement, oppening the door again');
        //TODO: Implementar lógica para abrir la puerta (Opening)
    }

    close(): void {
        console.log('door is closing');
        // TODO: Implementar lógica para cerrar la puerta (Closed)
    }
}

// Clase Context - AutomaticDoor
class AutomaticDoor {
    private state: IState;

    constructor() {
        this.state = new Closed();
    }

    setState(state: IState): void {
        this.state = state;
        console.log(`%cState changed to: ${state.name}`, COLORS.green);
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

class StatePatternLab2 {
    async exec() {

        const door = new AutomaticDoor();

        let selectedOption: string | null = '3';

        do {
            console.clear();
            console.log(`actual state: ${door.getStateName()}`);
            selectedOption = prompt(`
      1. open door
      2. close dorr
      3. exit

      pick an option:": 
    `);

            switch (selectedOption) {
                case '1':
                    door.open();
                    break;
                case '2':
                    door.close();
                    break;
                case '3':
                    console.log('exisintg...');
                    break;
                default:
                    console.log('invalid option.');
                    break;
            }

            await sleepTime(2000);
        } while (selectedOption !== '3');
    }
}
