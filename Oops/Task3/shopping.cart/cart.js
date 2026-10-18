"use strict";
class Product {
    id;
    name;
    price;
    stock;
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    displayProduct() {
        console.log(`
            ${this.id}. 
            ${this.name} - ₹${this.price} | 
            Stock: ${this.stock}`);
    }
}
//Create customer class
class Customer {
    id;
    name;
    purchaseHistory = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    viewPurchaseHistory() {
        console.log(`\n--- ${this.name}'s Purchase History ---`);
        if (this.purchaseHistory.length === 0) {
            console.log("No purchases yet.");
            return;
        }
        this.purchaseHistory.forEach(order => {
            console.log(`Orders ${order.orderId} | Total: ₹${order.finalAmount.toFixed(2)}`);
        });
    }
}
// Create ShoppingCart class
class ShoppingCart {
    customer;
    products = [];
    couponCode = "";
    constructor(customer) {
        this.customer = customer;
    }
    addProduct(product, quantity) {
        if (quantity <= 0) {
            console.log("Quantity must be greater than zero.");
            return;
        }
        const existingItem = this.products.find(item => item.product === product);
        const currentQuantity = existingItem ? existingItem.quantity : 0;
        if (currentQuantity + quantity > product.stock) {
            console.log(`Not enough stock for ${product.name}.`);
            return;
        }
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.products.push({ product, quantity });
        }
        console.log(`${quantity} ${product.name}(s) added to cart.`);
    }
    //Apply coupons
    applyCoupon(code) {
        this.couponCode = code.toUpperCase();
    }
    calculateSubtotal() {
        return this.products.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
    calculateDiscount() {
        if (this.couponCode === "SAVE10") {
            return this.calculateSubtotal() * 0.10;
        }
        return 0;
    }
    calculateTax() {
        // Example tax rate: 18%
        const taxableAmount = this.calculateSubtotal() - this.calculateDiscount();
        return taxableAmount * 0.18;
    }
    calculateTotal() {
        return (this.calculateSubtotal() -
            this.calculateDiscount() +
            this.calculateTax());
    }
    checkout(orderId) {
        if (this.products.length === 0) {
            console.log("Your cart is empty.");
            return null;
        }
        // Check stock again at checkout
        for (const item of this.products) {
            if (item.quantity > item.product.stock) {
                console.log(`Not enough stock for ${item.product.name}.`);
                return null;
            }
        }
        // Reduce stock only after all items pass validation
        this.products.forEach(item => {
            item.product.stock -= item.quantity;
        });
        const order = new Orders(orderId, this.customer, this.products.map(item => ({
            productName: item.product.name,
            price: item.product.price,
            quantity: item.quantity
        })), this.calculateSubtotal(), this.calculateDiscount(), this.calculateTax(), this.calculateTotal());
        // Save this order to the individual customer's history
        this.customer.purchaseHistory.push(order);
        console.log("\nOrder placed successfully!");
        order.displayOrder();
        this.products = [];
        this.couponCode = "";
        return order;
    }
}
class Orders {
    orderId;
    customer;
    items;
    subtotal;
    discount;
    tax;
    finalAmount;
    constructor(orderId, customer, items, subtotal, discount, tax, finalAmount) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = items;
        this.subtotal = subtotal;
        this.discount = discount;
        this.tax = tax;
        this.finalAmount = finalAmount;
    }
    displayOrder() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Customer: ${this.customer.name}`);
        console.log("Purchased products:");
        this.items.forEach(item => {
            console.log(`${item.productName} x ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`);
        });
        console.log(`Subtotal: ₹${this.subtotal.toFixed(2)}`);
        console.log(`Discount: ₹${this.discount.toFixed(2)}`);
        console.log(`Tax (18%): ₹${this.tax.toFixed(2)}`);
        console.log(`Final Amount: ₹${this.finalAmount.toFixed(2)}`);
    }
}
// ---------------- MAIN PROGRAM ----------------
// Create products
const laptop = new Product(101, "Laptop", 50000, 5);
const mouse = new Product(102, "Mouse", 500, 10);
const keyboard = new Product(103, "Keyboard", 1000, 8);
// Display available products
console.log("--- Available Products ---");
laptop.displayProduct();
mouse.displayProduct();
keyboard.displayProduct();
// Create customers
const customer1 = new Customer(1, "Pavithra");
const customer2 = new Customer(2, "Priya");
// Each customer has an independent shopping cart
const cart1 = new ShoppingCart(customer1);
const cart2 = new ShoppingCart(customer2);
// Customer 1 adds products
console.log("\n--- Customer 1 Cart ---");
cart1.addProduct(laptop, 1);
cart1.addProduct(mouse, 2);
cart1.applyCoupon("SAVE10");
cart1.checkout(1001);
// Customer 2 purchases the same product
console.log("\n--- Customer 2 Cart ---");
cart2.addProduct(laptop, 1);
cart2.addProduct(keyboard, 1);
cart2.checkout(1002);
// Try to purchase more than the remaining stock
console.log("\n--- Stock Validation ---");
cart1.addProduct(laptop, 10);
// Display remaining stock
console.log("\n--- Remaining Stock ---");
laptop.displayProduct();
mouse.displayProduct();
keyboard.displayProduct();
// Display individual purchase histories
customer1.viewPurchaseHistory();
customer2.viewPurchaseHistory();
/* Create `Customer`, `Product`, `ShoppingCart`, and `Order` classes.
- Allow customers to browse and purchase products.
- Maintain product stock quantities.
- Allow multiple customers to purchase the same product.
- Prevent purchasing quantities exceeding stock.
- Implement discount coupons and tax calculation.
- Generate individual purchase histories.*/ 
