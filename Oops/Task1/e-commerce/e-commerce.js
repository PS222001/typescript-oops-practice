"use strict";
class Product {
    // Private fields = Encapsulation
    productId;
    name;
    price;
    constructor(productId, name, price) {
        // Validation
        if (price <= 0) {
            throw new Error("Price must be greater than 0.");
        }
        this.productId = productId;
        this.name = name;
        this.price = price;
    }
    // Getter methods
    getProductId() {
        return this.productId;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}
// Mobile
class Mobile extends Product {
    calculateFinalPrice() {
        const gst = this.getPrice() * 0.18;
        const discount = this.getPrice() * 0.10;
        return this.getPrice() + gst - discount;
    }
}
// Laptop
class Laptop extends Product {
    calculateFinalPrice() {
        const gst = this.getPrice() * 0.18;
        const discount = this.getPrice() * 0.15;
        return this.getPrice() + gst - discount;
    }
}
// Tablet
class Tablet extends Product {
    calculateFinalPrice() {
        const gst = this.getPrice() * 0.12;
        const discount = this.getPrice() * 0.08;
        return this.getPrice() + gst - discount;
    }
}
// Runtime Polymorphism
function calculateProductPrice() {
    try {
        const productId = Number(document.getElementById("productId").value);
        const name = document.getElementById("name").value;
        const price = Number(document.getElementById("price").value);
        const productType = document.getElementById("productType").value;
        // Polymorphism
        let product;
        if (productType === "Mobile") {
            product = new Mobile(productId, name, price);
        }
        else if (productType === "Laptop") {
            product = new Laptop(productId, name, price);
        }
        else {
            product = new Tablet(productId, name, price);
        }
        const finalPrice = product.calculateFinalPrice();
        const message = `Product ID: ${product.getProductId()}<br>
             Product Name: ${product.getName()}<br>
             Product Type: ${productType}<br>
             Original Price: ₹${product.getPrice()}<br>
             Final Price: ₹${finalPrice.toFixed(2)}`;
        console.log(message.replace(/<br>/g, "\n"));
        document.getElementById("result").innerHTML = message;
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            error.message;
    }
}
