import { Creator } from "./Creator";
import { ConcreteCreatorA } from "./CreatorProductA";
import { ConcreteCreatorB } from "./CreatorProductB";

export class FactoryMethodPatternLab2 {

    exec(): void {
        const creatorA = new ConcreteCreatorA();
        this.clientCode(creatorA); // Output: Creator: The same creator's code has just worked with Result of ConcreteProductA

        const creatorB = new ConcreteCreatorB();
        this.clientCode(creatorB); // Output: Creator: The same creator's code has just worked with Result of ConcreteProductB
    }

    clientCode(creator: Creator) {
        console.log(creator.someOperation());
    }
}