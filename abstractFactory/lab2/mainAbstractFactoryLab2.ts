interface Sushi {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenSushi implements Sushi {
  prepare(): void {
    console.log('Preparing %cSushi of Chicken');
  }
}

class BeefSushi implements Sushi {
  prepare(): void {
    console.log('Preparing sushi of %cRes');
  }
}

class Water implements Drink {
  pour(): void {
    console.log('Pouring a glass of %water');
  }
}

class PopDrink implements Drink {
  pour(): void {
    console.log('Pouring a glass of %pop');
  }
}

interface RestaurantFactory {
  createSushi(): Sushi;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createSushi(): Sushi {
    return new BeefSushi();
  }

  createDrink(): Drink {
    return new PopDrink();
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createSushi(): Sushi {
    return new ChickenPasta();
  }

  createDrink(): Drink {
    return new Water();
  }
}

function mainAbstractFactoryLab2(factory: RestaurantFactory) {
  const sushi = factory.createSushi();
  const drink = factory.createDrink();

  sushi.prepare();
  drink.pour();
}

console.log('regular menu order:\n');
mainAbstractFactoryLab2(new FastFoodRestaurantFactory());

console.log('\n\nhealthy menu order:');
mainAbstractFactoryLab2(new HealthyRestaurantFactory());

