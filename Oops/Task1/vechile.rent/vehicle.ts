abstract class Vehicle{
    protected vehicleNumber : string;
    protected days : number;

    constructor(vechileNumber: string , days: number){
        this.vehicleNumber = vechileNumber;
        this.days=days;
    }

    //ABSTRACT METHOD
    public abstract calculateRent():number;
    public displayDetails(): string {
        return `Vehicle Number: ${this.vehicleNumber}<br>
                Number of Days: ${this.days}`;
    }
}
// Child class 1
class Car extends Vehicle {

    public calculateRent(): number {
        return this.days * 2000;
    }
}


// Child class 2
class Bike extends Vehicle {

    public calculateRent(): number {
        return this.days * 800;
    }
}


// Child class 3
class Bus extends Vehicle {

    public calculateRent(): number {
        return this.days * 5000;
    }
}


// Runtime Polymorphism
function calculateRental(): void {

    const vehicleNumber = (
        document.getElementById("vehicleNumber") as HTMLInputElement
    ).value;

    const days = Number(
        (document.getElementById("days") as HTMLInputElement).value
    );

    const vehicleType = (
        document.getElementById("vehicleType") as HTMLSelectElement
    ).value;

let vehicle: Vehicle;


    if (vehicleType === "Car") {

        vehicle = new Car(vehicleNumber, days);

    } else if (vehicleType === "Bike") {

        vehicle = new Bike(vehicleNumber, days);

    } else {

        vehicle = new Bus(vehicleNumber, days);
    }


    const rent = vehicle.calculateRent();


    const message =
        `Vehicle Type: ${vehicleType}<br>
         Vehicle Number: ${vehicleNumber}<br>
         Number of Days: ${days}<br>
         Total Rent: ₹${rent}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}