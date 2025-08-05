import { ICar } from "./ICar";

export abstract class CarFactory {

    abstract manufactureCar(): ICar;

    orderCar():void {
        const car = this.manufactureCar();
        car.manufacture();
    }

}

