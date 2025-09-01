import { Product } from "./Product";

export class ConcreteProductB implements Product {

    operation(): string {
        return "Result of ConcreteProductB";
    }

}
