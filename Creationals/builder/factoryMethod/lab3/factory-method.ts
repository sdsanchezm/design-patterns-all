interface Pasta {
  prepare(): void;
}

class ChickenPasta implements Pasta {
  prepare(): void {
    console.log('Preparing chicken pasta');
  }
}

class BeefPasta implements Pasta {
  prepare(): void {
    console.log('Preparing beef pasta');
  }
}

class AlfredoPasta implements Pasta {
  prepare(): void {
    console.log('Preparing Alfredo pasta');
  }
}

abstract class Restaurant {
  protected abstract createPasta(): Pasta;

  orderPasta(): void {
    const pasta = this.createPasta();
    pasta.prepare();
  }
}

class ChickenPastaRestaurant extends Restaurant {
  override createPasta(): Pasta {
    return new ChickenPasta();
  }
}

class BeefPastaRestaurant extends Restaurant {
  override createPasta(): Pasta {
    return new BeefPasta();
  }
}

class AlfredoPastaRestaurant extends Restaurant {
  override createPasta(): Pasta {
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