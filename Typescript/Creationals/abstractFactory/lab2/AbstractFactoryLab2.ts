import { COLORS } from "../../../Utils/COLORS";

interface Sushi {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenSushi implements Sushi {
  prepare(): void {
    console.log('Preparing %cSushi of Chicken', COLORS.blue);
  }
}

class BeefSushi implements Sushi {
  prepare(): void {
    console.log('Preparing sushi of %cBeef', COLORS.blue);
  }
}

class Water implements Drink {
  pour(): void {
    console.log('Pouring a glass of %cwater', COLORS.blue);
  }
}

class PopDrink implements Drink {
  pour(): void {
    console.log('Pouring a glass of %cpop', COLORS.blue);
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
    return new ChickenSushi();
  }

  createDrink(): Drink {
    return new Water();
  }
}

export class AbstractFactoryLab2 {

  Factory(factory: RestaurantFactory) {
    const sushi = factory.createSushi();
    const drink = factory.createDrink();

    sushi.prepare();
    drink.pour();
  }

  exec() {
    console.log('regular menu order:\n');
    this.Factory(new FastFoodRestaurantFactory());

    console.log('\n\nhealthy menu order:');
    this.Factory(new HealthyRestaurantFactory());
  }
}