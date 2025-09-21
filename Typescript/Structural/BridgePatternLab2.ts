interface IPower {
    powerName: string;
    usePower(): void;
}

class FireblastAttack implements IPower {
    powerName: string = "Fireblast power";
    
    usePower(): void {
        console.log("power: fireblast done");
    }
}

class SnowballAttack implements IPower {
    powerName: string = "snowball power";
    usePower(): void {
        console.log("power: snowball done");
    }
}

class RayAttack implements IPower {
    powerName: string = "ray power";
    usePower(): void {
        console.log("power: ray done");
    }
}

abstract class Hero {
    protected power: IPower;

    constructor(power: IPower) {
        this.power = power;
    }

    // this must be abstract because it's particular for each implementation
    abstract attack(): void;

    // this doesn't need to be abstract
    // this impl it's the same for each concrete impl
    setPower(attack: IPower): void {
        this.power = attack;
    }
}

class SuperMagician extends Hero {

    override attack(): void {
        console.log(`magician attacking with ${this.power.powerName}`);
        this.power.usePower();
    }
    
}

class SuperWarrior extends Hero {
    attack(): void {
        console.log(`warrior attacking with ${this.power.powerName}`);
        this.power.usePower();
    }
    
    multiAttack(attack: IPower[]) {
        console.log(`warrior multi-attacking started:`);
        attack.forEach((attack) => attack.usePower())
    }
}

export class BridgePatternLab2 {
    exec() {
        const magician1 = new SuperMagician(new SnowballAttack());
        magician1.attack();
        magician1.setPower(new RayAttack());
        magician1.attack();

        const warrior1 = new SuperWarrior(new FireblastAttack);
        warrior1.attack();
        warrior1.setPower(new RayAttack());
        warrior1.attack();

        const carevaca = new SuperWarrior(new FireblastAttack());

        const listOfAttacks = [
            new FireblastAttack(),
            new RayAttack(),
            new RayAttack(),
            new SnowballAttack(),
        ];

        carevaca.multiAttack(listOfAttacks);
    }
}