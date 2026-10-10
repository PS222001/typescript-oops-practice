"use strict";
class FoodItem {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Parent method
    calculatePrice() {
        return this.price;
    }
}
// Pizza
class Pizza extends FoodItem {
    calculatePrice() {
        return this.price + 50;
    }
}
// Burger
class Burger extends FoodItem {
    calculatePrice() {
        return this.price + 30;
    }
}
// Biryani
class Biryani extends FoodItem {
    calculatePrice() {
        return this.price + 20;
    }
}
// Main function
function calculateOrder() {
    const name = document.getElementById("foodName").value;
    const price = Number(document.getElementById("price").value);
    const foodType = document.getElementById("foodType").value;
    // Polymorphism
    let food;
    if (foodType === "Pizza") {
        food = new Pizza(name, price);
    }
    else if (foodType === "Burger") {
        food = new Burger(name, price);
    }
    else {
        food = new Biryani(name, price);
    }
    // Calls the overridden method
    const foodPrice = food.calculatePrice();
    // Delivery charge based on order amount
    let deliveryCharge;
    if (foodPrice >= 500) {
        deliveryCharge = 0;
    }
    else {
        deliveryCharge = 50;
    }
    const finalPrice = foodPrice + deliveryCharge;
    const message = `Food Type: ${foodType}<br>
         Food Name: ${name}<br>
         Food Price: ₹${foodPrice}<br>
         Delivery Charge: ₹${deliveryCharge}<br>
         Final Price: ₹${finalPrice}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
