class ConcreteCreatorB extends Creator {

    factoryMethod(): Product {
        return new ConcreteProductB();
    }
    
}
