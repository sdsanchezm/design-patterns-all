import { CarFactory } from "./CarFactory";
import { Ferrari } from "./Ferrari";
import { ICar } from "./ICar";

export class FerrariFactory extends CarFactory {

    override manufactureCar(): ICar {
        // throw new Error("Method not implemented.");
        const car = new Ferrari();
        return car;
    }

}