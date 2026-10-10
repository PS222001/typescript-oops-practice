"use strict";
class Vehicle {
    vehicleNumber;
    parkingHours;
    constructor(vehicleNumber, parkingHours) {
        this.vehicleNumber = vehicleNumber;
        this.parkingHours = parkingHours;
    }
}
class Car extends Vehicle {
    calculateParkingFee() {
        return this.parkingHours * 50;
    }
}
class Bike extends Vehicle {
    calculateParkingFee() {
        return this.parkingHours * 20;
    }
}
class Truck extends Vehicle {
    calculateParkingFee() {
        return this.parkingHours * 100;
    }
}
function calculateParking() {
    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const parkingHours = Number(document.getElementById("parkingHours").value);
    const vehicleType = document.getElementById("vehicleType").value;
    // Polymorphism
    let vehicle;
    if (vehicleType === "Car") {
        vehicle = new Car(vehicleNumber, parkingHours);
    }
    else if (vehicleType === "Bike") {
        vehicle = new Bike(vehicleNumber, parkingHours);
    }
    else {
        vehicle = new Truck(vehicleNumber, parkingHours);
    }
    const parkingFee = vehicle.calculateParkingFee();
    const message = `Vehicle Type: ${vehicleType}<br>
         Vehicle Number: ${vehicleNumber}<br>
         Parking Duration: ${parkingHours} hours<br>
         Parking Fee: ₹${parkingFee}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
