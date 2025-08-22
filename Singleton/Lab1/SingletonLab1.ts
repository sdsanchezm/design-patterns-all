export class SingletonLab1 {

    private static instance: SingletonLab1;
    private connected: boolean = false;

    private constructor() { };

    public static getInstance() {
        if (!this.instance) {
            SingletonLab1.instance = new SingletonLab1();
            console.log("ok...");
        }

        return SingletonLab1.instance;
    }

    public connect(): void {
        if (this.connected) {
            console.log("you were connected already.");
            return;
        }

        this.connected = true;
        console.log("you are now connected.");

    }

    public disconnected() {
        if(this.connected){
            console.log("disconnected...");
            this.connected = false;
            return;
        }
    }

    public static exec = () => {
        const s1 = SingletonLab1.getInstance();
        s1.connect();

        const s2 = SingletonLab1.getInstance();
        s2.connect();
    };

}