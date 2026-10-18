"use strict";
class Product {
    productName;
    // Private properties: cannot be accessed directly outside the class
    price;
    stock;
    discount = 0;
    auditLog = [];
    constructor(productName, price, stock) {
        this.productName = productName;
        this.price = price >= 0 ? price : 0;
        this.stock = stock >= 0 ? stock : 0;
        this.auditLog.push("Product created");
    }
    // Getter: access price
    get getPrice() {
        return this.price;
    }
    // Setter: update price with validation
    set setPrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
            this.auditLog.push(`Price changed to ₹${newPrice}`);
        }
        else {
            console.log("Price must be greater than zero.");
        }
    }
    // Getter: access stock
    get getStock() {
        return this.stock;
    }
    // Setter: prevent negative stock
    set setStock(newStock) {
        if (newStock >= 0) {
            this.stock = newStock;
            this.auditLog.push(`Stock changed to ${newStock}`);
        }
        else {
            console.log("Stock cannot be negative.");
        }
    }
    // Getter: access discount
    get getDiscount() {
        return this.discount;
    }
    // Setter: discount must be between 0 and 100
    set setDiscount(newDiscount) {
        if (newDiscount >= 0 && newDiscount <= 100) {
            this.discount = newDiscount;
            this.auditLog.push(`Discount changed to ${newDiscount}%`);
        }
        else {
            console.log("Discount must be between 0 and 100.");
        }
    }
    // Automatically check stock status
    get stockStatus() {
        return this.stock === 0 ? "Out of Stock" : "In Stock";
    }
    // Alert when stock is low
    checkLowStock() {
        if (this.stock > 0 && this.stock <= 5) {
            console.log("Low stock alert!");
        }
    }
    // Calculate inventory value after discount
    calculateInventoryValue() {
        const discountedPrice = this.price - (this.price * this.discount / 100);
        return discountedPrice * this.stock;
    }
    // Display audit log
    displayAuditLog() {
        console.log("Audit Log:", this.auditLog);
    }
    // Display product details
    displayProduct() {
        console.log("Product:", this.productName);
        console.log("Price: ₹" + this.price);
        console.log("Stock:", this.stock);
        console.log("Discount:", this.discount + "%");
        console.log("Status:", this.stockStatus);
        console.log("Inventory Value: ₹" + this.calculateInventoryValue());
        this.checkLowStock();
    }
}
// Create a product
const product1 = new Product("Laptop", 50000, 4);
// Update values using setters
product1.setPrice = 55000;
product1.setDiscount = 10;
product1.setStock = 0;
// Display details and history
product1.displayProduct();
product1.displayAuditLog();
