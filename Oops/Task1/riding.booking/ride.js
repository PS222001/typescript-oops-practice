"use strict";
class Ride {
    distance;
    constructor(distance) {
        this.distance = distance;
    }
}
class BikeRide extends Ride {
    calculateFare() {
        return this.distance * 10;
    }
}
class AutoRide extends Ride {
    calculateFare() {
        return this.distance * 15;
    }
}
class CabRide extends Ride {
    calculateFare() {
        return this.distance * 20;
    }
}
function calculateRideFare() {
    const distance = Number(document.getElementById("distance").value);
    const rideType = document.getElementById("rideType").value;
    // Polymorphism
    let ride;
    if (rideType === "Bike") {
        ride = new BikeRide(distance);
    }
    else if (rideType === "Auto") {
        ride = new AutoRide(distance);
    }
    else {
        ride = new CabRide(distance);
    }
    const fare = ride.calculateFare();
    const message = `Ride Type: ${rideType}<br>
         Distance: ${distance} km<br>
         Total Fare: ₹${fare}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
