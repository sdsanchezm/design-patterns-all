

interface Observer {
    notify(titile: string): void;
}

class Channel {

    private name: string;
    private subscribers: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    subscribe(newSubscriber: Observer) {
        this.subscribers.push(newSubscriber);
        console.log(`new sub on channel: ${this.name}`);
        
    }
    
    unsusbcribe(subscriber: Observer) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
        console.log(`Notification: a sub has gone.`);
    }

    uploadVideo (videoTitle: string) {
        console.log(`new video!: ${videoTitle}`);
        
        this.subscribers.forEach(subscriber => {
            subscriber.notify(`${videoTitle}`);
        });
    }

}

class Subscriber implements Observer {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    notify(videoTitle: string): void {
        console.log(`hey ${this.name}! there is a new video: ${videoTitle}`);
        
    }

}

export class ObserverPatternLab1 {

    exec() {
        const channel = new Channel('big new games');

        const subscribedPerson1 = new Subscriber('jamecho');
        const subscribedPerson2 = new Subscriber('jara');
        const subscribedPerson3 = new Subscriber('amparo');

        channel.subscribe(subscribedPerson1);
        channel.subscribe(subscribedPerson2);
        channel.uploadVideo('==super game A==');
        
        channel.subscribe(subscribedPerson3);
        channel.unsusbcribe(subscribedPerson2);
        
        channel.uploadVideo('==super game B==');



    }
}