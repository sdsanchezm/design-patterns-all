import { COLORS } from "./COLORS.ts";
import { StrategyPattern } from "./StrategyPattern/lab1/StrategyPattern.ts";

function main() {
    const strategyPat = new StrategyPattern(COLORS).exec();
}

main();

