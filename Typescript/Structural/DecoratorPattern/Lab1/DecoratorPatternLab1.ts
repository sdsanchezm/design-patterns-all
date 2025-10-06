import { COLORS } from "../../../Utils/COLORS";

interface Notification {
    send(message: string): void;
}

class BasicNotification implements Notification {

    send(message: string): void {
        console.log(`%c basic notification: ${message}`, COLORS.cyan);
    }
}

abstract class NotificatorDecorator implements Notification {

    protected notification: Notification;

    constructor(notification: Notification) {
        this.notification = notification;
    }

    send(message: string): void {
        this.notification.send(`${message}`);
    }
}

class SMSDecorator extends NotificatorDecorator {

    protected sendSMS(message: string) {
        console.log(`%c Sending SMS Notification: ${message}`, COLORS.purple);
    }

    override send(message: string): void {
        super.send(message);
        this.sendSMS(message);
    }
}

class PushDecorator extends NotificatorDecorator {

    protected sendPush(message: string) {
        console.log(`%c Sending Push Notification: ${message}`, COLORS.white);
    }
    
    override send(message: string): void {
        super.send(message);
        this.sendPush(message);
    }
}


export class DecoratorPatternLab1 {

    exec() {
        let notification: Notification = new BasicNotification();

        notification = new SMSDecorator(notification);
        notification = new PushDecorator(notification);

        notification.send("Emergency Alert!");
    }
}
