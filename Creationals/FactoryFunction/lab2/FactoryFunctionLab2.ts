import { COLORS } from "../../../../COLORS";

interface KeyValuePair<K, V> { };

type Language = 'de' | 'en' | 'fr';

export class FactoryFunctionLab2 {
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

    // closures allows to keep the value of lang
    greeterCreator(lang: Language) {
        return function (name: string) {
            const messages = {
                de: `Hallo, %c${name}!`,
                en: `Hello, %c${name}!`,
                fr: `Bonjour, %c${name}!`,
            };

            return console.log(messages[lang], COLORS.purple);
        };
    }

    exec() {
        const esFunc = this.greeterCreator('de');
        esFunc("jamecho");
        const enFunc = this.greeterCreator('en');
        enFunc("jamecho");
        const frFunc = this.greeterCreator('fr');
        frFunc("jamecho");
    }
}