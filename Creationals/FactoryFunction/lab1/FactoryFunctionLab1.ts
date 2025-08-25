import { COLORS } from "../../../../COLORS";

interface KeyValuePair <K, V> {
};

export class FactoryFunctionLab1 {

    private colors?: typeof COLORS;
    // signatures
    constructor();
    constructor(colors: typeof COLORS);
    // ctor
    constructor(colors?: typeof COLORS) {
        if (colors) {
            this.colors = colors;
        }
    }

    //Goal: Create a function that returns the first element of an array, typed generically.
    getFirstElement<T>(arr: T[]): T {
        return arr[0];
    }

    exec() {

        // Goal: Create a function that returns the first element of an array, typed generically.
        // Test cases
        const numbers = [1, 2, 3];
        const firstNum = this.getFirstElement(numbers); // Should infer `firstNum` as `number`
        console.log(firstNum);

        const strings = ["hello", "world"];
        const firstStr = this.getFirstElement(strings); // Should infer `firstStr` as `string`
        console.log(firstStr);


    }


}