/*### Task 14 – Railway Ticket Reservation (Readonly & Constructor Parameter Properties)

Develop a railway reservation application.

- Create `Passenger`, `Train`, and `Ticket` classes.
- Use `readonly` for immutable ticket numbers.
- Use constructor parameter properties where appropriate.
- Implement seat allocation and waiting lists.
- Prevent duplicate seat assignment.
- Calculate ticket prices based on travel class.
- Implement cancellation and refund rules.
- Ensure issued ticket IDs cannot be modified. */


type TravelClass = "Sleeper" | "AC3" | "AC2";
// Part 1: Passenger
class Passenger {
    constructor(
        public readonly passengerId: number,
        public name: string,
        public age: number
    ) {}
}

// Part 2: Train
class Train {
    public bookedSeats: number[] = [];
    public bookedPassengerIds: number[] = [];
    public waitingList: Passenger[] = [];

    constructor(
        public trainNumber: number,
        public totalSeats: number
    ) {}

    //booking seat

    bookSeat(passenger: Passenger): number | null{
        // Prevent duplicate booking
        if (
            this.bookedPassengerIds.includes(passenger.passengerId) ||
            this.waitingList.some(
                p => p.passengerId === passenger.passengerId
            )
        ) {
            console.log(`${passenger.name} already has a booking.`);
            return null;
        }
        // If all seats are booked, add passenger to waiting list
        if (this.bookedSeats.length >= this.totalSeats) {
            this.waitingList.push(passenger);
            console.log(`${passenger.name} added to waiting list.`);
            return null;
        }
        // Find the first available seat
        let seatNumber = 1;

        while (this.bookedSeats.includes(seatNumber)) {
            seatNumber++;
        }

        this.bookedSeats.push(seatNumber);
        this.bookedPassengerIds.push(passenger.passengerId);

        console.log(
            `${passenger.name} booked seat ${seatNumber}.`
        );

        return seatNumber;
    }
//cancelSeat 
cancelSeat(passengerId: number, seatNumber: number): boolean {
        const index = this.bookedSeats.indexOf(seatNumber);

        if (
            index === -1 ||
            !this.bookedPassengerIds.includes(passengerId)
        ) {
            return false;
        }

        this.bookedSeats.splice(index, 1);

        const passengerIndex =
            this.bookedPassengerIds.indexOf(passengerId);

        this.bookedPassengerIds.splice(passengerIndex, 1);

        console.log(`Seat ${seatNumber} is now available.`);
        return true;
    }
}
// Part 3: Ticket
class Ticket {
    public readonly ticketId: number;
    public status: "Confirmed" | "Cancelled" = "Confirmed";

    constructor(
        ticketId: number,
        public passenger: Passenger,
        public train: Train,
        public readonly seatNumber: number,
        public travelClass: TravelClass
    ) {
        this.ticketId = ticketId;
    }

    calculatePrice(): number {
        switch (this.travelClass) {
            case "Sleeper":
                return 300;
            case "AC3":
                return 700;
            case "AC2":
                return 1000;
        }
    }

    displayTicket(): void {
        console.log("\n--- Ticket Details ---");
        console.log(`Ticket ID: ${this.ticketId}`);
        console.log(`Passenger: ${this.passenger.name}`);
        console.log(`Train: ${this.train.trainNumber}`);
        console.log(`Seat: ${this.seatNumber}`);
        console.log(`Class: ${this.travelClass}`);
        console.log(`Price: ₹${this.calculatePrice()}`);
        console.log(`Status: ${this.status}`);
    }

    cancel(hoursBeforeDeparture: number): number {
        if (this.status === "Cancelled") {
            console.log("Ticket is already cancelled.");
            return 0;
        }

        const seatReleased = this.train.cancelSeat(
            this.passenger.passengerId,
            this.seatNumber
        );

        if (!seatReleased) {
            console.log("Unable to cancel this booking.");
            return 0;
        }

        let refundRate: number;

        if (hoursBeforeDeparture > 24) {
            refundRate = 0.90;
        } else {
            refundRate = 0.50;
        }

        const refund = this.calculatePrice() * refundRate;
        this.status = "Cancelled";

        console.log(`${this.passenger.name}'s ticket cancelled.`);
        console.log(`Refund: ₹${refund}`);

        return refund;
    }
}

// Part 4: Test the program
const train1 = new Train(12635, 2);

const p1 = new Passenger(101, "Pavithra", 25);
const p2 = new Passenger(102, "Priya", 24);
const p3 = new Passenger(103, "Ravi", 30);

const seat1 = train1.bookSeat(p1);
const seat2 = train1.bookSeat(p2);
train1.bookSeat(p3); // No seats: waiting list

if (seat1 !== null) {
    const ticket1 = new Ticket(1001, p1, train1, seat1, "AC2");

    ticket1.displayTicket();

    // Cancel 48 hours before departure
    ticket1.cancel(48);

    // Try cancelling again
    ticket1.cancel(48);
}

console.log("\nBooked seats:", train1.bookedSeats);
console.log(
    "Waiting list:",
    train1.waitingList.map(p => p.name)
);



    
