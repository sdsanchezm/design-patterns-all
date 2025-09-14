import { COLORS } from "../../../Utils/COLORS";

//  * * Es útil cuando queremos duplicar el contenido, 
//  * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.

class Recipe {
    public title: string;
    public author: string;
    public recipeContent: string[];
    private recipeNumber: number;

    constructor(title: string, author: string, recipeContent: string[]) {
        this.title = title;
        this.author = author;
        [...this.recipeContent] = recipeContent;
    }

    clone() {
        return new Recipe(this.title, this.author, [...this.recipeContent]);
    }

    displayInfo() {
        console.log(`
            title: ${this.title}
            author: ${this.author}
            recipeContent: ${this.recipeContent.join(', ')}
            \n`);
        
    }
}

export class PrototypePatternLab1 {

    exec() {
        const recipe1 = new Recipe("chicken biryani", "Jurgen", ["step1","step2"]);
        console.log(recipe1);
        console.log({ recipe1 });
        recipe1.displayInfo();

        const recipe2 = recipe1.clone();
        recipe2.recipeContent.push("stepA");
        console.log(recipe2);
        console.log({ recipe2 });
        recipe2.displayInfo();
    }
}