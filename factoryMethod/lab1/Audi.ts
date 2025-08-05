import { ICar } from "./ICar";

export class Audi implements ICar {

    manufacture(): void {
        // throw new Error("Method not implemented.");
        console.log("Manufacturing an Audi");
    }

}