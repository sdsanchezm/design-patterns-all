import { COLORS } from "./COLORS.ts";

import { FactoryFunctionLab1 } from "./Creationals/FactoryFunction/lab1/FactoryFunctionLab1.ts";
import { FactoryFunctionLab2 } from "./Creationals/FactoryFunction/lab2/FactoryFunctionLab2.ts";
import { FactoryFunctionLab3 } from "./Creationals/FactoryFunction/lab3/FactoryFunctionLab3.ts";
import { SingletonLab1 } from "./Creationals/Singleton/Lab1/SingletonLab1.ts";
import { SingletonLab2 } from "./Creationals/Singleton/Lab2/SingletonLab2.ts";

import { StrategyPatternLab1 } from "./Behavioral/StrategyPattern/lab1/StrategyPatternLab1.ts";
import { StrategyPatternLab2 } from "./Behavioral/StrategyPattern/lab2/StrategyPatternLab2.ts";
import { templateMethodPatternLab1 } from "./Behavioral/templateMethodPattern/templateMethodPatternLab1.ts";
import { templateMethodPatternLab2 } from "./Behavioral/templateMethodPattern/templateMethodPatternLab2.ts";

function main() {

    // StrategyPattern
    // new StrategyPatternLab1(COLORS).exec();
    // new StrategyPatternLab2(COLORS).exec();

    // FactoryFunction
    // new FactoryFunctionLab1(COLORS).exec();
    // new FactoryFunctionLab2(COLORS).exec();
    // new FactoryFunctionLab3(COLORS).exec();

    // Singleton
    // SingletonLab1.exec();
    // SingletonLab2.exec();

    // templateMethodPattern
    // templateMethodPatternLab1.exec();
    templateMethodPatternLab2.exec();

}

main();

