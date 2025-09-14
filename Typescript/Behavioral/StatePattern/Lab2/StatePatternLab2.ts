import { COLORS } from "../../../Utils/COLORS";

// Interfaz State
interface State {
    name: string;

    open(): void;
    close(): void;
}

// Clase Context - AutomaticDoor
class AutomaticDoor {
    private state: State;

    constructor() {
        this.state = new Closed(this);
    }

    setState(state: State): void {
        this.state = state;
        console.log(`%cEstado cambiado a: ${state.name}`, COLORS.green);
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

// Estado 1 - Cerrada
class Closed implements State {
    private door: AutomaticDoor;
    public name: string;

    open(): void {
        console.log('Abriendo la puerta...');
        // TODO: Implementar lógica para colocar el estado en abriendo la puerta (Opening)
    }

    close(): void {
        console.log('La puerta ya está cerrada.');
    }
}

// Estado 2 - Abriéndose
class Opening implements State {
    public name: string;
    private door: AutomaticDoor;

    constructor(door: AutomaticDoor) {
        //TODO: asignar door y name = Abriendo
        this.afterOpen();
    }

    private async afterOpen() {
        await sleep(3000);

        console.log('La puerta se ha abierto.');
        // TODO: Implementar lógica para abrir la puerta (Open)
    }

    open(): void {
        console.log('La puerta ya se está abriendo.');
    }

    close(): void {
        console.log('La puerta no puede cerrarse mientras se abre.');
    }
}

// Estado 3 - Abierta
class Open implements State {
    private door: AutomaticDoor;
    public name: string;

    constructor(door: AutomaticDoor) {
        this.name = 'Abierta';
    }

    open(): void {
        console.log('La puerta ya está abierta.');
    }

    close(): void {
        console.log('Cerrando la puerta...');
        // TODO: Implementar lógica para cerrar la puerta (Closing)
    }
}

// Estado 4 - Cerrándose
class Closing implements State {
    public name: string;

    constructor(door: AutomaticDoor) {
        this.door = door;
        this.name = 'Cerrándose';
    }

    open(): void {
        console.log('Detectando movimiento. Abriendo la puerta nuevamente...');
        //TODO: Implementar lógica para abrir la puerta (Opening)
    }

    close(): void {
        console.log('La puerta se ha cerrado.');
        // TODO: Implementar lógica para cerrar la puerta (Closed)
    }
}

// Código Cliente para probar el patrón State
async function main() {
    const door = new AutomaticDoor();

    let selectedOption: string | null = '3';

    do {
        console.clear();
        console.log(`Estado actual: ${door.getStateName()}`);
        selectedOption = prompt(`
      1. Abrir puerta
      2. Cerrar puerta
      3. Salir

      Selecciona una opción: 
    `);

        switch (selectedOption) {
            case '1':
                door.open();
                break;
            case '2':
                door.close();
                break;
            case '3':
                console.log('Saliendo del simulador...');
                break;
            default:
                console.log('Opción no válida.');
                break;
        }

        await sleep(2000);
    } while (selectedOption !== '3');
}

main();
