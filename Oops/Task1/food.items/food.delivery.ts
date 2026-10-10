class FoodItem {

    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    // Parent method
    public calculatePrice(): number {
        return this.price;
    }
}


// Pizza
class Pizza extends FoodItem {

    public calculatePrice(): number {
        return this.price + 50;
    }
}


// Burger
class Burger extends FoodItem {

    public calculatePrice(): number {
        return this.price + 30;
    }
}


// Biryani
class Biryani extends FoodItem {

    public calculatePrice(): number {
        return this.price + 20;
    }
}


// Main function
function calculateOrder(): void {

    const name = (
        document.getElementById("foodName") as HTMLInputElement
    ).value;

    const price = Number(
        (document.getElementById("price") as HTMLInputElement).value
    );

    const foodType = (
        document.getElementById("foodType") as HTMLSelectElement
    ).value;


    // Polymorphism
    let food: FoodItem;


    if (foodType === "Pizza") {

        food = new Pizza(name, price);

    } else if (foodType === "Burger") {

        food = new Burger(name, price);

    } else {

        food = new Biryani(name, price);
    }


    // Calls the overridden method
    const foodPrice = food.calculatePrice();


    // Delivery charge based on order amount
    let deliveryCharge: number;

    if (foodPrice >= 500) {
        deliveryCharge = 0;
    } else {
        deliveryCharge = 50;
    }


    const finalPrice = foodPrice + deliveryCharge;


    const message =
        `Food Type: ${foodType}<br>
         Food Name: ${name}<br>
         Food Price: ₹${foodPrice}<br>
         Delivery Charge: ₹${deliveryCharge}<br>
         Final Price: ₹${finalPrice}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}