import { COLORS } from "./COLORS.ts";

import { VisitorPatternLab1 } from "./Behavioral/VisitorPattern/Lab1/VisitorPatternLab1.ts";
import { StrategyPatternLab1 } from "./Behavioral/StrategyPattern/lab1/StrategyPatternLab1.ts";
import { StrategyPatternLab2 } from "./Behavioral/StrategyPattern/lab2/StrategyPatternLab2.ts";
import { templateMethodPatternLab1 } from "./Behavioral/templateMethodPattern/templateMethodPatternLab1.ts";
import { templateMethodPatternLab2 } from "./Behavioral/templateMethodPattern/templateMethodPatternLab2.ts";

import { FactoryFunctionLab1 } from "./Creationals/FactoryFunction/lab1/FactoryFunctionLab1.ts";
import { FactoryFunctionLab2 } from "./Creationals/FactoryFunction/lab2/FactoryFunctionLab2.ts";
import { FactoryFunctionLab3 } from "./Creationals/FactoryFunction/lab3/FactoryFunctionLab3.ts";
import { RaspberryPiBuilder } from "./Creationals/builder/lab1/builderPatternLab1.ts";
import { QueryBuilder } from "./Creationals/builder/Lab2/builderPatternLab2.ts";
import { FactoryMethodPatternLab1 } from "./Creationals/factoryMethod/lab1/FactoryMethodPatternLab1.ts";
import { FactoryMethodPatternLab2 } from "./Creationals/factoryMethod/lab2/FactoryMethodPatternLab2.ts";
import { FactoryMethodPatternLab3 } from "./Creationals/factoryMethod/lab3/factory-method.ts";
import { SingletonLab1 } from "./Creationals/Singleton/Lab1/SingletonLab1.ts";
import { SingletonLab2 } from "./Creationals/Singleton/Lab2/SingletonLab2.ts";
import { AbstractFactoryLab1 } from "./Creationals/abstractFactory/lab1/AbstractFactoryLab1.ts";
import { AbstractFactoryLab2 } from "./Creationals/abstractFactory/lab2/AbstractFactoryLab2.ts";
import { AbstractFactoryLab3 } from "./Creationals/abstractFactory/lab3/AbstractFactoryLab3.ts";
import { PrototypePatternLab1 } from "./Creationals/PrototypePattern/Lab1/PrototypePatternLab1.ts";

class Program {

    public static main() {
        // Structural Patterns ===================

        // Behavioural Patterns ===================

        // Strategy Pattern
        // new StrategyPatternLab1(COLORS).exec();
        // new StrategyPatternLab2(COLORS).exec();

        // Template Method Pattern
        // templateMethodPatternLab1.exec();
        // templateMethodPatternLab2.exec();

        // Visitor Pattern
        // new VisitorPatternLab1().exec();


        // Creational Patterns ===================

        // Factory Function Pattern
        // new FactoryFunctionLab1(COLORS).exec();
        // new FactoryFunctionLab2(COLORS).exec();
        // new FactoryFunctionLab3(COLORS).exec();

        // Singleton Pattern
        // SingletonLab1.exec();
        // SingletonLab2.exec();

        // Factory Method Pattern
        // new FactoryMethodPatternLab1().exec();
        // new FactoryMethodPatternLab2().exec();
        // new FactoryMethodPatternLab3().exec();

        // Builder Pattern
        // new RaspberryPiBuilder().exec();
        // new QueryBuilder('users').exec();

        // Abstract factory
        // new AbstractFactoryLab1().exec();
        // new AbstractFactoryLab2().exec();
        // new AbstractFactoryLab3().exec();

        // Prototype Pattern
        new PrototypePatternLab1().exec();
    }

}

Program.main();
