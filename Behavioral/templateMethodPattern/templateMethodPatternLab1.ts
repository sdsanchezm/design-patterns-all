abstract class PizzaPreparationTemplate {
    prepare(): void {
        this.doughtReady();
        this.saucing();
        this.cheesing();
        this.hamming();
        this.baking();
    }

    private doughtReady() {
        console.log("dough ready...");
    }

    private saucing() {
        console.log("sausing ready...");
    }

    private cheesing() {
        console.log("cheesing ready...");
    }

    private seasoning() {
        console.log("seasoning ready...");
    }

    protected abstract baking(): void;
    protected abstract hamming(): void;
}

class PineapplePizza extends PizzaPreparationTemplate {
    protected override hamming():void {
        console.log("hamming for pineapple pizza ready...");
    }

    protected override baking():void {
        console.log("baking for pineapple pizza ready...");   
    }
}

class PeperoniPizza extends PizzaPreparationTemplate {
    protected override hamming():void {
        console.log("pepperoni for pepperoni pizza ready...");
    }

    protected override baking():void {
        console.log("baking for pepperoni pizza ready...");
    }
}

export class templateMethodPatternLab1 {
    static exec() {
        const p1 = new PineapplePizza();
        p1.prepare();

        const p2 = new PeperoniPizza();
        p2.prepare();
    }
}