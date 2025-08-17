import { Creator } from "./Creator";
import { Product } from "./Product";
import { ConcreteProductA } from "./ProductA";

export class ConcreteCreatorA extends Creator {

    factoryMethod(): Product {
        return new ConcreteProductA();
    }
}
