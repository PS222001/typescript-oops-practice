type Product = {
    id: number;
    name: string;
    price: number | string;
};

let product1: Product = {
    id: 1,
    name: "Laptop",
    price: 55000
};

let product2: Product = {
    id: 2,
    name: "Mobile",
    price: "₹25000"
};

console.log(product1);
console.log(product2);