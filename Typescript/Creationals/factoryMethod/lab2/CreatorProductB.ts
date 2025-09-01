import { Creator } from "./Creator";
import { Product } from "./Product";
import { ConcreteProductB } from "./ProductB";

export class ConcreteCreatorB extends Creator {

    factoryMethod(): Product {
        return new ConcreteProductB();
    }
    
}
