abstract class Creator {

    abstract factoryMethod(): Product;

    someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }

}
