type DeliveryStatus = "Delivered" | "Failed" | "Invalid";

// Stores the result of each notification
interface DeliveryRecord {
    message: string;
    status: DeliveryStatus;
    attempts: number;
}

// Common interface for every notification type
interface NotificationService {
    send(message: string): boolean;
    getHistory(): DeliveryRecord[];
}

// Parent class containing common notification logic
abstract class BaseNotification implements NotificationService {

    private history: DeliveryRecord[] = [];

    constructor(
        public readonly channel: string,
        protected recipient: string,
        protected maxRetries: number = 2,
        protected failuresBeforeSuccess: number = 1
    ) {}
    // Each child class must implement its own validation
    protected abstract validateRecipient(): boolean;
    // Simulates sending; configured failures happen before success
    protected deliver(message: string, attempt: number): boolean {
        console.log(
            `${this.channel}: Attempt ${attempt} to send "${message}"`
        );

        return attempt > this.failuresBeforeSuccess;
    }

     // Common method used by all notification types
    send(message: string): boolean {
        // Validate the message and recipient
        if (message.trim() === "" || !this.validateRecipient()) {
            console.log(`${this.channel}: Invalid message or recipient.`);

            this.history.push({
                message,
                status: "Invalid",
                attempts: 0
            });

            return false;
        }

        // Initial attempt + retry attempts
        const maxAttempts = this.maxRetries + 1;

        for (let attempt = 1; attempt <= maxAttempts; attempt++) {

            if (this.deliver(message, attempt)) {
                console.log(`${this.channel}: Notification delivered!`);

                this.history.push({
                    message,
                    status: "Delivered",
                    attempts: attempt
                });

                return true;
            }

            console.log(`${this.channel}: Attempt failed.`);
        }

        // Runs when all attempts fail
        console.log(`${this.channel}: Delivery failed after retries.`);

        this.history.push({
            message,
            status: "Failed",
            attempts: maxAttempts
        });

        return false;
    }

    // Returns the delivery history
    getHistory(): DeliveryRecord[] {
        return this.history;
    }
}

// Email notification
class EmailNotification extends BaseNotification {

    protected validateRecipient(): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.recipient);
    }
}

// SMS notification
class SMSNotification extends BaseNotification {

    protected validateRecipient(): boolean {
        return /^\d{10}$/.test(this.recipient);
    }
}

// Push notification
class PushNotification extends BaseNotification {

    protected validateRecipient(): boolean {
        return this.recipient.trim().length >= 10;
    }
}

// Processes different notification types through one interface
function processNotification(
    service: NotificationService,
    message: string
): void {
    service.send(message);
}

// Create notification objects
const email = new EmailNotification(
    "Email", "pavithra@example.com", 2, 1
);

const sms = new SMSNotification(
    "SMS", "9876543210", 2, 0
);

const push = new PushNotification(
    "Push", "short", 2, 0
);

// Common processing
const notifications: NotificationService[] = [email, sms, push];

for (const notification of notifications) {
    processNotification(notification, "Your booking is confirmed.");
    console.log("--------------------");
}

// Display delivery history
for (const notification of notifications) {
    console.log(`${notification.getHistory() === undefined ? "" : "Delivery history:"}`);
    console.log(notification.getHistory());
}
