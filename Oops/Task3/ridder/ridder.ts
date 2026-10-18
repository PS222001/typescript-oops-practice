
type RideType = "Mini" | "Sedan" | "SUV";

class Rider {
    constructor(public name: string) {}
}

class Driver {
    public available: boolean = true;

    constructor(public name: string) {}
}

class Vehicle {
    constructor(
        public vehicleNumber: string,
        public type: RideType
    ) {}
}

class FareCalculator {

    // Distance charge per kilometre
    calculateFare(
        type: RideType,
        distance: number,
        waitingMinutes: number,
        surge: number
    ): number {

        let rate = 0;

        // Different prices for different vehicles
        if (type === "Mini") {
            rate = 10;
        } else if (type === "Sedan") {
            rate = 15;
        } else {
            rate = 20;
        }

        const distanceCharge = distance * rate;
        const waitingCharge = waitingMinutes * 2;
        const total = (distanceCharge + waitingCharge) * surge;

        return total;
    }
}

class Ride {
    public completed: boolean = false;

    constructor(
        public rider: Rider,
        public driver: Driver,
        public vehicle: Vehicle,
        public distance: number,
        public waitingMinutes: number,
        public surge: number,
        public fare: number
    ) {}

    completeRide(): void {
        this.completed = true;
        this.driver.available = true;
    }

    displaySummary(): void {
        console.log("----- TRIP SUMMARY -----");
        console.log("Rider:", this.rider.name);
        console.log("Driver:", this.driver.name);
        console.log("Vehicle:", this.vehicle.vehicleNumber);
        console.log("Ride Type:", this.vehicle.type);
        console.log("Distance:", this.distance, "km");
        console.log("Waiting:", this.waitingMinutes, "minutes");
        console.log("Total Fare: ₹" + this.fare);
        console.log("Status:", this.completed ? "Completed" : "Active");
    }
}

class RideBookingService {

    private rides: Ride[] = [];

    // Dependency injection:
    // FareCalculator is received through the constructor
    constructor(private fareCalculator: FareCalculator) {}

    bookRide(
        rider: Rider,
        driver: Driver,
        vehicle: Vehicle,
        distance: number,
        waitingMinutes: number,
        surge: number
    ): Ride | null {

        // Only available drivers can accept a ride
        if (!driver.available) {
            console.log("Driver is already on an active ride!");
            return null;
        }

        // Validate trip inputs
        if (distance <= 0 || waitingMinutes < 0 || surge < 1) {
            console.log("Invalid ride details!");
            return null;
        }

        const fare = this.fareCalculator.calculateFare(
            vehicle.type,
            distance,
            waitingMinutes,
            surge
        );

        const ride = new Ride(
            rider,
            driver,
            vehicle,
            distance,
            waitingMinutes,
            surge,
            fare
        );

        // Mark driver unavailable while ride is active
        driver.available = false;

        this.rides.push(ride);

        console.log("Ride booked successfully!");
        return ride;
    }
}

// Create objects
const rider1 = new Rider("Pavithra");
const driver1 = new Driver("Arun");
const vehicle1 = new Vehicle("TN01AB1234", "Sedan");

// Create fare calculator and inject it into booking service
const calculator = new FareCalculator();
const bookingService = new RideBookingService(calculator);

// Book a ride
const ride1 = bookingService.bookRide(
    rider1,
    driver1,
    vehicle1,
    10,  // distance in km
    5,   // waiting minutes
    1.5  // surge multiplier
);

if (ride1 !== null) {
    // Complete the ride
    ride1.completeRide();

    // Show trip summary
    ride1.displaySummary();
}
