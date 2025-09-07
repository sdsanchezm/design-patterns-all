import { AudiFactory } from "./AudiFactory.ts";
import { FerrariFactory } from "./FerrariFactory.ts";

export class FactoryMethodPatternLab1 {

    exec() {
        // const audi = new AudiFactory()
        const factory1 = new AudiFactory();
        // factory1.manufactureCar();
        factory1.orderCar();

        // const ferrari = new FerrariFactory();
        const factory2 = new FerrariFactory();
        factory2.orderCar();
        // factory2.manufactureCar();
    }
}
