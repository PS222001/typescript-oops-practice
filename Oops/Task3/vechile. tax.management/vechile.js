"use strict";
class Vehicle {
    vehicleNumber;
    rentalRate;
    available;
    rentalDays;
    securityDeposit;
    constructor(vehicleNumber, rentalRate, available, rentalDays, securityDeposit) {
        if (vehicleNumber.trim() === "" ||
            rentalRate <= 0 ||
            rentalDays <= 0 ||
            securityDeposit < 0) {
            throw new Error("Invalid vehicle details.");
        }
        this.vehicleNumber = vehicleNumber;
        this.rentalRate = rentalRate;
        this.available = available;
        this.rentalDays = rentalDays;
        this.securityDeposit = securityDeposit;
    }
    // Check availability
    isAvailable() {
        return this.available;
    }
    // Get rental details
    getRentalRate() {
        return this.rentalRate;
    }
    getRentalDays() {
        return this.rentalDays;
    }
    getSecurityDeposit() {
        return this.securityDeposit;
    }
    // Child classes override this method
    calculateRentalCharges() {
        return this.rentalRate * this.rentalDays;
    }
    // Generate invoice
    displayInvoice(vehicleType, additionalCharges) {
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
    constructor(vehicleNumber, rentalDays, available, securityDeposit) {
        super(vehicleNumber, 3000, available, rentalDays, securityDeposit);
    }
    calculateRentalCharges() {
        return this.getRentalRate() * this.getRentalDays();
    }
}
// Bike inherits Vehicle
class Bike extends Vehicle {
    constructor(vehicleNumber, rentalDays, available, securityDeposit) {
        super(vehicleNumber, 800, available, rentalDays, securityDeposit);
    }
    calculateRentalCharges() {
        return this.getRentalRate() * this.getRentalDays();
    }
}
// Truck inherits Vehicle
class Truck extends Vehicle {
    constructor(vehicleNumber, rentalDays, available, securityDeposit) {
        super(vehicleNumber, 5000, available, rentalDays, securityDeposit);
    }
    calculateRentalCharges() {
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
}
catch (error) {
    console.log(error instanceof Error ? error.message : "An unexpected error occurred.");
}
