//  * * Es útil cuando necesitas añadir nuevas operaciones a
//  * * clases estables sin cambiar su código.

interface Visitor {
    visitWarehouse(warehouse: Warehouse): void;
    visitOffice(office: Office): void;
    visitApartment(apartment: Apartment): void;
}

interface Building {
    accept(visitor: Visitor): void;
    getPoints(): number;
}

class Warehouse implements Building {
    private price: number = 10;

    accept(visitor: Visitor): void {
        visitor.visitWarehouse(this);
    }

    getPoints(): number {
        return this.price;
    }
}

class Office implements Building {
    private price: number = 20;

    accept(visitor: Visitor): void {
        visitor.visitOffice(this);
    }

    getPoints(): number {
        return this.price;
    }
}

class Apartment implements Building {
    private price: number = 30;

    accept(visitor: Visitor): void {
        visitor.visitApartment(this);
    }

    getPoints(): number {
        return this.price;
    }
}

class AdminWorker implements Visitor {
    visitWarehouse(warehouse: Warehouse): void {
        console.log(`Admin worker in Warehouse, price: $${warehouse.getPoints() * 0.2}`);
    }
    visitOffice(office: Office): void {
        console.log(`Admin worker in office, price: $${office.getPoints() * 0.9}`);
    }
    visitApartment(apartment: Apartment): void {
        console.log(`Admin worker in apartment, price: $${apartment.getPoints() * 0.7}`);
    }
}

class LogisticWorker implements Visitor {
    visitWarehouse(warehouse: Warehouse): void {
        console.log(`Logistic worker in Warehouse, price: $${warehouse.getPoints() * 0.9}`);
    }
    visitOffice(office: Office): void {
        console.log(`Logistic worker in office, price: $${office.getPoints() * 0.3}`);
    }
    visitApartment(apartment: Apartment): void {
        console.log(`Logistic worker in apartment, price: $${apartment.getPoints() * 0.3}`);
    }
}

class MaidWorker implements Visitor {
    visitWarehouse(warehouse: Warehouse): void {
        console.log(`Maid worker in Warehouse, price: $${warehouse.getPoints() * 0.2}`);
    }
    visitOffice(office: Office): void {
        console.log(`Maid worker in office, price: $${office.getPoints() * 0.3}`);
    }
    visitApartment(apartment: Apartment): void {
        console.log(`Maid worker in apartment, price: $${apartment.getPoints() * 0.9}`);
    }
}

export class VisitorPatternLab1 {

    exec(){
        const buildings: Building[] = [
            new Apartment(),
            new Warehouse(),
            new Office()
        ]

        console.log(`Apartment: ${new Apartment().getPoints()}`);
        console.log(`Warehouse: ${new Warehouse().getPoints()}`);
        console.log(`Office: ${new Office().getPoints()}`);
        console.log("\n==\n");

        
        
        
    }
}
