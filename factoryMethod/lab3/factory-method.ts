interface Sushi {
  prepare(): void;
}

class ChickenPasta implements Sushi {
  prepare(): void {
    console.log('Preparing chicken pasta');
  }
}

class BeefPasta implements Sushi {
  prepare(): void {
    console.log('Preparing beef pasta');
  }
}

class AlfredoPasta implements Sushi {
  prepare(): void {
    console.log('Preparing Alfredo pasta');
  }
}

abstract class Restaurant {
  protected abstract createPasta(): Sushi;

  orderPasta(): void {
    const pasta = this.createPasta();
    pasta.prepare();
  }
}

class ChickenPastaRestaurant extends Restaurant {
  override createPasta(): Sushi {
    return new ChickenPasta();
  }
}

class BeefPastaRestaurant extends Restaurant {
  override createPasta(): Sushi {
    return new BeefPasta();
  }
}

class AlfredoPastaRestaurant extends Restaurant {
  override createPasta(): Sushi {
    return new AlfredoPasta();
  }
}

function mainLab3() {
  let restaurant: Restaurant;

  const pastaType = prompt(
    'What pasta would you like? ( chicken/beef/alfredo )'
  );

  switch (pastaType) {
    case 'chicken':
      restaurant = new ChickenPastaRestaurant();
      break;

    case 'beef':
      restaurant = new BeefPastaRestaurant();
      break;

    case 'alfredo':
      restaurant = new AlfredoPastaRestaurant();
      break;

    default:
      throw new Error('invalida option');
  }

  restaurant.orderPasta();
}

mainLab3();