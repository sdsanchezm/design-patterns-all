import { COLORS } from "../../../Utils/COLORS";

interface ITaxStrategy{
    calculateTax(amount: number): number;
}

// Strategies
class TaxStrategyUSA implements ITaxStrategy {
    calculateTax(amount: number): number {
        console.log("TaxStrategyUSA");
        return amount * 0.1;
    }
}

class TaxStrategyCanada implements ITaxStrategy {
    calculateTax(amount: number): number {
        console.log("TaxStrategyCanada");
        return amount * 0.3;
    }
}

class TaxStrategyGermany implements ITaxStrategy {
    calculateTax(amount: number): number {
        console.log("TaxStrategyGermany");
        return amount * 0.2;
    }
}

// Strategy Consumer
export class TaxCalculator {
    private customerName: string;
    private strategy: ITaxStrategy;

    constructor(name: string, strategy: ITaxStrategy) {
        this.customerName = name;
        this.strategy = strategy;
    }

    calculate(amount: number): number {
        console.log(`calculating Taxes for ${this.customerName}`);
        return this.strategy.calculateTax(amount);
    }

    setStrategy(strategy: ITaxStrategy) {
        this.strategy = strategy;
    }
}

export class StrategyPatternLab2 {
    private colors? : typeof COLORS;

    // signatures
    constructor();
    constructor(colors: typeof COLORS);

    constructor(colors?: typeof COLORS) {
        console.log('%cStrategy pattern - lab 1 ===', COLORS.violet);
        if (colors){
            this.colors = colors;
        }
    }

    exec(){
        const taxCalc1 = new TaxCalculator("Jara", new TaxStrategyGermany());
        const taxCalc2 = new TaxCalculator("Jamecho", new TaxStrategyCanada());
        const taxCalc3 = new TaxCalculator("Azabache", new TaxStrategyUSA());

        console.log(taxCalc1.calculate(122000).toFixed(2));
        console.log(taxCalc2.calculate(23000).toFixed(2));
        console.log(taxCalc3.calculate(11000).toFixed(2));
        
    }
}