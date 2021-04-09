export default class Observer {
    constructor() {
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe() {
        if (!this.subscribers.length) {
            this.subscribers.pop();
        }
    }

    notify(data) {
        this.subscribers.forEach(subscriber => {
            subscriber.update(data);
        });
    }
}
