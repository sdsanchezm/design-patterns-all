class ConcreteCreatorA extends Creator {

    factoryMethod(): Product {
        return new ConcreteProductA();
    }
    
}

