abstract class Ride {

    protected distance: number;

    constructor(distance: number) {
        this.distance = distance;
    }

    // Abstract method
    public abstract calculateFare(): number;
}


class BikeRide extends Ride {

    public calculateFare(): number {
        return this.distance * 10;
    }
}


class AutoRide extends Ride {

    public calculateFare(): number {
        return this.distance * 15;
    }
}


class CabRide extends Ride {

    public calculateFare(): number {
        return this.distance * 20;
    }
}


function calculateRideFare(): void {

    const distance = Number(
        (document.getElementById("distance") as HTMLInputElement).value
    );

    const rideType = (
        document.getElementById("rideType") as HTMLSelectElement
    ).value;


    // Polymorphism
    let ride: Ride;


    if (rideType === "Bike") {

        ride = new BikeRide(distance);

    } else if (rideType === "Auto") {

        ride = new AutoRide(distance);

    } else {

        ride = new CabRide(distance);
    }


    const fare = ride.calculateFare();


    const message =
        `Ride Type: ${rideType}<br>
         Distance: ${distance} km<br>
         Total Fare: ₹${fare}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}