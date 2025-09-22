interface INotificationChannel {
    send(message: string): void;
}

class EmailChannel implements INotificationChannel {

    send(message: string): void {
        console.log(`sending email: ${message}`);
    }

}

class SmsChannel implements INotificationChannel {

    send(message: string): void {
        console.log(`sending sms: ${message}`);
    }
}

class PushChannel implements INotificationChannel {

    send(message: string): void {
        console.log(`sending push: ${message}`);
    }
}

abstract class NotificationBase {

    protected channel: INotificationChannel;

    constructor(channel: INotificationChannel) {
        this.channel = channel;
    }

    abstract notify(message: string): void;
    abstract setChannel(channel: INotificationChannel): void;
}

class ReminderNotification extends NotificationBase {
    override notify(message: string): void {
        console.log("sending reminder: ");
        this.channel.send(message);
    }

    override setChannel(channel: INotificationChannel): void {
        this.channel = channel;
    }
}

class ScheduledActivityNotification extends NotificationBase {
    notify(message: string): void {
        console.log("sending scheduled notification: ");
        this.channel.send(message);
    }
    setChannel(channel: INotificationChannel): void {
        this.channel = channel;
    }
}

export class BridgePatternLab1 {

    exec() {
        const notification1 = new ReminderNotification(new EmailChannel());
        notification1.notify("this is a reminder notification using EmailChannel");
        notification1.setChannel(new SmsChannel());
        notification1.notify("this is a reminder notification using SmsChannel");
        notification1.setChannel(new PushChannel());
        notification1.notify("this is a reminder notification using PushChannel");

        const notification2 = new ScheduledActivityNotification(new PushChannel());
        notification2.notify("sending scheduled notification using PushChannel");
        notification2.setChannel(new SmsChannel());
        notification2.notify("sending scheduled notification using smsChannel");
        notification2.setChannel(new EmailChannel());
        notification2.notify("sending scheduled notification using EmailChannel");
    }
}