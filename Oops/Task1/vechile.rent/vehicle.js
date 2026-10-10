"use strict";
class Vehicle {
    vehicleNumber;
    days;
    constructor(vechileNumber, days) {
        this.vehicleNumber = vechileNumber;
        this.days = days;
    }
    displayDetails() {
        return `Vehicle Number: ${this.vehicleNumber}<br>
                Number of Days: ${this.days}`;
    }
}
// Child class 1
class Car extends Vehicle {
    calculateRent() {
        return this.days * 2000;
    }
}
// Child class 2
class Bike extends Vehicle {
    calculateRent() {
        return this.days * 800;
    }
}
// Child class 3
class Bus extends Vehicle {
    calculateRent() {
        return this.days * 5000;
    }
}
// Runtime Polymorphism
function calculateRental() {
    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const days = Number(document.getElementById("days").value);
    const vehicleType = document.getElementById("vehicleType").value;
    let vehicle;
    if (vehicleType === "Car") {
        vehicle = new Car(vehicleNumber, days);
    }
    else if (vehicleType === "Bike") {
        vehicle = new Bike(vehicleNumber, days);
    }
    else {
        vehicle = new Bus(vehicleNumber, days);
    }
    const rent = vehicle.calculateRent();
    const message = `Vehicle Type: ${vehicleType}<br>
         Vehicle Number: ${vehicleNumber}<br>
         Number of Days: ${days}<br>
         Total Rent: ₹${rent}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
