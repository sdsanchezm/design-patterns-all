import { COLORS } from "./COLORS.ts";
import { FactoryFunctionLab1 } from "./FactoryFunction/lab1/FactoryFunctionLab1.ts";
import { FactoryFunctionLab2 } from "./FactoryFunction/lab2/FactoryFunctionLab2.ts";
import { FactoryFunctionLab3 } from "./FactoryFunction/lab3/FactoryFunctionLab3.ts";
import { SingletonLab1 } from "./Singleton/Lab1/SingletonLab1.ts";
import { StrategyPatternLab1 } from "./StrategyPattern/lab1/StrategyPatternLab1.ts";
import { StrategyPatternLab2 } from "./StrategyPattern/lab2/StrategyPatternLab2.ts";

function main() {

    // StrategyPattern
    // new StrategyPatternLab1(COLORS).exec();
    // new StrategyPatternLab2(COLORS).exec();

    // FactoryFunction
    // new FactoryFucntionLab1(COLORS).exec();
    // new FactoryFucntionLab2(COLORS).exec();
    // new FactoryFunctionLab3(COLORS).exec();

    // Singleton
    SingletonLab1.exec();
}

main();

