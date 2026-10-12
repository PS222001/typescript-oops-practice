class Vehicle {

    private vehicleNumber: string;
    private rentalRate: number;
    private available: boolean;
    private rentalDays: number;
    private securityDeposit: number;

    constructor(
        vehicleNumber: string,
        rentalRate: number,
        available: boolean,
        rentalDays: number,
        securityDeposit: number
    ) {
        if (
            vehicleNumber.trim() === "" ||
            rentalRate <= 0 ||
            rentalDays <= 0 ||
            securityDeposit < 0
        ) {
            throw new Error("Invalid vehicle details.");
        }

        this.vehicleNumber = vehicleNumber;
        this.rentalRate = rentalRate;
        this.available = available;
        this.rentalDays = rentalDays;
        this.securityDeposit = securityDeposit;
    }

    // Check availability
    protected isAvailable(): boolean {
        return this.available;
    }

    // Get rental details
    protected getRentalRate(): number {
        return this.rentalRate;
    }

    protected getRentalDays(): number {
        return this.rentalDays;
    }

    protected getSecurityDeposit(): number {
        return this.securityDeposit;
    }

    // Child classes override this method
    calculateRentalCharges(): number {
        return this.rentalRate * this.rentalDays;
    }

    // Generate invoice
    displayInvoice(vehicleType: string, additionalCharges: number): void {
        if (!this.available) {
            throw new Error("Vehicle is unavailable for rent.");
        }

        if (additionalCharges < 0) {
            throw new Error("Additional charges cannot be negative.");
        }

        const rentalCharges = this.calculateRentalCharges();
        const total = rentalCharges + additionalCharges + this.securityDeposit;

        console.log("========== RENTAL INVOICE ==========");
        console.log("Vehicle Type       :", vehicleType);
        console.log("Vehicle Number     :", this.vehicleNumber);
        console.log("Rental Duration    :", this.rentalDays, "days");
        console.log("Rental Charges     : ₹" + rentalCharges);
        console.log("Additional Charges : ₹" + additionalCharges);
        console.log("Security Deposit   : ₹" + this.securityDeposit);
        console.log("------------------------------------");
        console.log("Total Amount       : ₹" + total);
        console.log("====================================");
    }
}

// Car inherits Vehicle
class Car extends Vehicle {

    constructor(
        vehicleNumber: string,
        rentalDays: number,
        available: boolean,
        securityDeposit: number
    ) {
        super(vehicleNumber, 3000, available, rentalDays, securityDeposit);
    }

    override calculateRentalCharges(): number {
        return this.getRentalRate() * this.getRentalDays();
    }
}

// Bike inherits Vehicle
class Bike extends Vehicle {

    constructor(
        vehicleNumber: string,
        rentalDays: number,
        available: boolean,
        securityDeposit: number
    ) {
        super(vehicleNumber, 800, available, rentalDays, securityDeposit);
    }

    override calculateRentalCharges(): number {
        return this.getRentalRate() * this.getRentalDays();
    }
}

// Truck inherits Vehicle
class Truck extends Vehicle {

    constructor(
        vehicleNumber: string,
        rentalDays: number,
        available: boolean,
        securityDeposit: number
    ) {
        super(vehicleNumber, 5000, available, rentalDays, securityDeposit);
    }

    override calculateRentalCharges(): number {
        // Truck has an additional 10% heavy-vehicle charge
        const baseCharge = this.getRentalRate() * this.getRentalDays();
        return baseCharge + baseCharge * 0.10;
    }
}

// Create vehicle objects
const car = new Car("TN01AB1234", 2, true, 5000);
const bike = new Bike("TN02CD5678", 3, true, 1000);
const truck = new Truck("TN03EF9012", 2, true, 10000);

// Display invoices
car.displayInvoice("Car", 500);
bike.displayInvoice("Bike", 200);
truck.displayInvoice("Truck", 1500);

// Unavailable vehicle example
const unavailableCar = new Car("TN04GH3456", 2, false, 5000);

try {
    unavailableCar.displayInvoice("Car", 500);
} catch (error) {
    console.log(
        error instanceof Error ? error.message : "An unexpected error occurred."
    );
}