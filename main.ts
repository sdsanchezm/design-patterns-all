import { COLORS } from "./COLORS.ts";
import { FactoryFucntionLab1 } from "./FactoryFunction/lab1/FactoryFunctionLab1.ts";
import { FactoryFucntionLab2 } from "./FactoryFunction/lab2/FactoryFunctionLab2.ts";
import { StrategyPatternLab1 } from "./StrategyPattern/lab1/StrategyPatternLab1.ts";
import { StrategyPatternLab2 } from "./StrategyPattern/lab2/StrategyPatternLab2.ts";

function main() {

    // StrategyPattern
    // new StrategyPatternLab1(COLORS).exec();
    // new StrategyPatternLab2(COLORS).exec();

    // FactoryFunction
    // new FactoryFucntionLab1(COLORS).exec();
    new FactoryFucntionLab2(COLORS).exec();
}

main();

