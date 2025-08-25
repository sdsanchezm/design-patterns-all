class ConfigurationManager {

    private configuration: Record<string, string> = {};

    setConfiguration(key: string, value: string):void {
        this.configuration[key] = value;
    }

    getConfiguration (key: string): string | null {
        return this.configuration[key];
    }

    getAllConfiguration (): Record<string, string> {
        return this.configuration;
    }
}

export const configManager = new ConfigurationManager();