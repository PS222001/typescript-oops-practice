class Vehicle{
    // Parent class variables
    brand:string;
    speed:nummber;

    // Parent constructor
    constructor(brand:string,speed:nummber){
        this.brand=brand;
        this.speed=speed;
    }
}

class Car extends Vehicle{
    // Child class variable
    fuelType:string;

    // Child constructor
    constructor(
        brand: string, 
        speed: number, 
        fuelType: string) {
            // Call parent constructor
            super(brand,speed);
            this.fuelType=fuelType
    }
     // Display all car details
     displayDetails():void{
        console.log("Brand:", this.brand);
        console.log("Speed:", this.speed + " km/h");
        console.log("Fuel Type:", this.fuelType);
    }
}

// Create Car object
let car = new Car("Thar", 180, "Diesel");

// Display details
car.displayDetails();