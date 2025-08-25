import { Creator } from "./Creator";
import { ConcreteCreatorA } from "./CreatorProductA";
import { ConcreteCreatorB } from "./CreatorProductB";

function mainLab2(): void {

    const creatorA = new ConcreteCreatorA();
    clientCode(creatorA); // Output: Creator: The same creator's code has just worked with Result of ConcreteProductA

    const creatorB = new ConcreteCreatorB();
    clientCode(creatorB); // Output: Creator: The same creator's code has just worked with Result of ConcreteProductB

}

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

mainLab2();