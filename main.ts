import { COLORS } from "./COLORS.ts";
import { StrategyPatternLab1 } from "./StrategyPattern/lab1/StrategyPatternLab1.ts";
import { StrategyPatternLab2 } from "./StrategyPattern/lab2/StrategyPatternLab2.ts";

function main() {
    // new StrategyPatternLab1(COLORS).exec();
    new StrategyPatternLab2(COLORS).exec();
}

main();

