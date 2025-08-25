import { ICar } from "./ICar";

export class Ferrari implements ICar {

    manufacture(): void {
        // throw new Error("Method not implemented.");
        console.log("Manufacturing a %cFerrari", 'color: purple');
        
    }

}