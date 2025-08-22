// import * as ConfigurationManager from './ConfigurationManager.ts';
import {configManager as ConfigurationManager } from "./ConfigurationManager";

export class SingletonLab2 {

    constructor() { }

    public static exec(): void {
        ConfigurationManager.setConfiguration('apiURL', 'http://localhost:3000/api');
        ConfigurationManager.setConfiguration('timeout', '5000');
        ConfigurationManager.setConfiguration('apikey', 'ABC123');

        console.log(ConfigurationManager.getConfiguration('apiURL'));
        console.log(ConfigurationManager.getConfiguration('timeout'));
        console.log(ConfigurationManager.getConfiguration('apikey'));
    }
}
