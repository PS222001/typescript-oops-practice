abstract class Vehicle {

    protected vehicleNumber: string;
    protected parkingHours: number;

    constructor(vehicleNumber: string, parkingHours: number) {
        this.vehicleNumber = vehicleNumber;
        this.parkingHours = parkingHours;
    }

    // Abstract method
    public abstract calculateParkingFee(): number;
}


class Car extends Vehicle {

    public calculateParkingFee(): number {
        return this.parkingHours * 50;
    }
}


class Bike extends Vehicle {

    public calculateParkingFee(): number {
        return this.parkingHours * 20;
    }
}


class Truck extends Vehicle {

    public calculateParkingFee(): number {
        return this.parkingHours * 100;
    }
}


function calculateParking(): void {

    const vehicleNumber = (
        document.getElementById("vehicleNumber") as HTMLInputElement
    ).value;

    const parkingHours = Number(
        (document.getElementById("parkingHours") as HTMLInputElement).value
    );

    const vehicleType = (
        document.getElementById("vehicleType") as HTMLSelectElement
    ).value;


    // Polymorphism
    let vehicle: Vehicle;


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


    const message =
        `Vehicle Type: ${vehicleType}<br>
         Vehicle Number: ${vehicleNumber}<br>
         Parking Duration: ${parkingHours} hours<br>
         Parking Fee: ₹${parkingFee}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}