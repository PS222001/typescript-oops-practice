"use strict";
class Product {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    calculateDiscount() {
        return 0;
    }
}
// Electronics
class Electronics extends Product {
    calculateDiscount() {
        return this.price * 0.10;
    }
}
// Clothing
class Clothing extends Product {
    calculateDiscount() {
        return this.price * 0.20;
    }
}
// Book
class Book extends Product {
    calculateDiscount() {
        return this.price * 0.05;
    }
}
// Runtime Polymorphism
function calculateProductDiscount() {
    const name = document.getElementById("productName").value;
    const price = Number(document.getElementById("price").value);
    const productType = document.getElementById("productType").value;
    let product;
    if (productType === "Electronics") {
        product = new Electronics(name, price);
    }
    else if (productType === "Clothing") {
        product = new Clothing(name, price);
    }
    else {
        product = new Book(name, price);
    }
    const discount = product.calculateDiscount();
    const finalPrice = price - discount;
    const message = `Product: ${name}<br>
         Product Type: ${productType}<br>
         Original Price: ₹${price}<br>
         Discount: ₹${discount}<br>
         Final Price: ₹${finalPrice}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
