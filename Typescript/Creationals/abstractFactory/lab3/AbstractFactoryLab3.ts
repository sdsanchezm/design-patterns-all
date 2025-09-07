// 1. Interfaces de Vehicle y Engine
interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Clases Concretas de Productos

class ElectricCar implements Vehicle {
  assemble(): void {
    console.log("assemlying electricCar");
  }
}

class GasCar implements Vehicle {
  assemble(): void {
    console.log("assemlying electric GasCar");
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log("assemlying electricEngine");
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log("assemlying GasEngine");
  }
}

// 3. Interfaz de la Fábrica Abstracta
interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas
class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }
  createEngine(): Engine {
    return new ElectricEngine();
  }
  // Implementación de los métodos createVehicle y createEngine
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar();
  }
  createEngine(): Engine {
    return new GasEngine();
  }
  // Implementación de los métodos createVehicle y createEngine
}

// 5. Código Cliente

export class AbstractFactoryLab3 {

  Factory(factory: VehicleFactory) {
    const vehicle = factory.createVehicle();
    const engine = factory.createEngine();

    vehicle.assemble();
    engine.start();
  }

  exec() {
    // Pruebas
    console.log('Creando vehículo eléctrico:');
    this.Factory(new ElectricVehicleFactory());

    console.log('\nCreando vehículo de combustión:');
    this.Factory(new GasVehicleFactory());
  }
}