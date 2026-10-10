class Mobile{
    // Variables
    brand: string;
    model: string;
    price: number;
    // Parameterized constructor
    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    // Display mobile details
    displayDetails(): void {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Price: ₹" + this.price);
    }
}

// Create mobile objects
let mobile1 = new Mobile("Samsung", "Galaxy S25", 80000);

let mobile2 = new Mobile("Apple", "iPhone 17", 90000);


// Display details
mobile1.displayDetails();

console.log("----------------");

mobile2.displayDetails();