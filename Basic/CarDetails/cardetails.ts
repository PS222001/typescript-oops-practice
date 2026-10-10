type Car = {
    brand: string;
    model: string;
    year: number;
    price: number | string;
};

const car: Car = {
    brand: "Thar",
    model: "Mahindra Thar Roxx",
    year: 2020,
    price: "₹10,00,000"
};

console.log("Car Brand : " + car.brand);
console.log("Car Model : " + car.model);
console.log("Car Release Year : " + car.year);
console.log("Car Price : " + car.price);