// proxy pattern lab 1
//  * * Es útil cuando necesitamos controlar el acceso a un objeto,
//  * * por ejemplo, para verificar si el cliente tiene permiso
//  * * para acceder a ciertos métodos o propiedades.

import { COLORS } from "../../../Utils/COLORS";

class Character {
    name: string;
    level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
}

interface Box {
    enter(character: Character): void;
}

class MagicBox implements Box {

    enter(character: Character) {
        console.log("Welcome to the MagicBox");    
    }

}

// this is the proxy class
class MisteryBox implements Box {
    private secretBbox: Box;

    constructor(box: Box) {
        this.secretBbox = box;
    }

    enter(character: Character): void {
        if(character.level > 5) {
            console.log("welcome to Misterybox");
            this.secretBbox.enter(character);
            return;
        }

        console.log("%conly 5+ level characters can enter the box", COLORS.red);
    }

}

export class ProxyPatternLab1 {

    exec() {
        // proxy
        const box1 = new MisteryBox(new MagicBox());
        
        const char1 = new Character("jara", 3);
        console.log("char1 entering:");
        box1.enter(char1);
        
        const char2 = new Character("jamecho", 7);
        console.log("char2 entering:");
        box1.enter(char2);



    }
}