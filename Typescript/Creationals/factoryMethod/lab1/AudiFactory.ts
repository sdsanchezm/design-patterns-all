import { Audi } from "./Audi";
import { CarFactory } from "./CarFactory";
import { ICar } from "./ICar";

export class AudiFactory extends CarFactory {

    override manufactureCar(): ICar {
        // throw new Error("Method not implemented.");
        return new Audi();
    }

}