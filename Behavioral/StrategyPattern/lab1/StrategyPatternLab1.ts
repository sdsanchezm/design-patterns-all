import { COLORS } from "../../../COLORS";

// can't have multiple constructor implementations in a class
// Instead, need to use constructor overloading with a single implementation that handles all cases

interface IPaymentStrategy {
    pay(): void;
}

// Strategy 1 - Visa
class payWithVisaCard implements IPaymentStrategy {
    pay(): void {
        console.log("%cPaying with Visa card...", COLORS.orange);
    }
}

// Strategy 2 - MasterCard
class payWithMasterCard implements IPaymentStrategy {
    pay(): void {
        console.log("%cPaying with Master card...", COLORS.pink);
    }
}

// Strategy 3 - Master
class payWithDebitCard implements IPaymentStrategy {
    pay(): void {
        console.log("%cPaying with Debit card...", COLORS.green);
    }
}

// Strategy 4 - Cash
class payWithCash implements IPaymentStrategy {
    pay(): void {
        console.log("%cPaying with Cash...", COLORS.blue);
    }
}

// Strategy Consumer
class Payment {
    private paymentMethodName: string;
    private payStrategy: IPaymentStrategy;

    constructor(payMethodName: string, payMethodStrategy: IPaymentStrategy) {
        this.paymentMethodName = payMethodName;
        this.payStrategy = payMethodStrategy;
    }

    performPayment() {
        console.log(`${this.paymentMethodName} performing payment`);
        this.payStrategy.pay();
    }

    setPayStrategy(newStrategy: IPaymentStrategy) {
        console.log("Strategy updated ");
        this.payStrategy = newStrategy;
    }
}

export class StrategyPatternLab1 {

    private colors?: typeof COLORS;

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
        const payment1 = new Payment("Visa", new payWithVisaCard());
        const payment2 = new Payment("Mastercard", new payWithMasterCard());
        const payment3 = new Payment("Debit", new payWithDebitCard());
        const payment4 = new Payment("Cash", new payWithCash());

        payment1.performPayment();
        payment2.performPayment();
        payment3.performPayment();
        payment4.performPayment();

        payment1.setPayStrategy(new payWithCash);
        payment1.performPayment();

    }

}

