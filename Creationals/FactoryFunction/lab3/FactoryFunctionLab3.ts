import { COLORS } from "../../../../COLORS";

type LogLevel = 'info' | 'warning' | 'error';

export class FactoryFunctionLab3 {
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

    formatDate(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // factoryFunction here - encapsulates in closure: logColor and prefix
    createLogger(level: LogLevel) {
        return (message: string) => {
            const timestamp = this.formatDate(new Date());
            const logColor = {
                info: COLORS.white,
                warning: COLORS.yellow,
                error: COLORS.red,
            };

            const prefix = {
                info: 'INFO',
                warning: 'WARNING',
                error: 'ERROR',
            };

            console.log(`%c[${prefix[level]}: ${timestamp}] ${message}`, logColor[level]);
        };
    }

    exec() {
        const errorLogger = this.createLogger('error');
        const warnLogger = this.createLogger('warning');
        const infoLogger = this.createLogger('info');

        errorLogger('Error in database connection.');
        warnLogger('High memory usage.');
        infoLogger('App started ok.');
    }
}