
class FoodOrder {
    private orderHistory: string[] = [];

    // Method overloading: 1st signature
    calculateBill(foodPrice: number, quantity: number): number;

    // Method overloading: 2nd signature
    calculateBill(
        foodPrice: number,
        quantity: number,
        discountPercentage: number
    ): number;

    // Method overloading: 3rd signature
    calculateBill(
        foodPrice: number,
        quantity: number,
        discountPercentage: number,
        deliveryCharge: number
    ): number;

    // Actual implementation
    calculateBill(
        foodPrice: number,
        quantity: number,
        discountPercentage: number = 0,
        deliveryCharge: number = 0
    ): number {

        // Validate food price
        if (!Number.isFinite(foodPrice) || foodPrice <= 0) {
            throw new Error("Food price must be greater than zero.");
        }

        // Validate quantity
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Quantity must be a positive whole number.");
        }

        // Validate discount
        if (
            !Number.isFinite(discountPercentage) ||
            discountPercentage < 0 ||
            discountPercentage > 100
        ) {
            throw new Error("Discount must be between 0 and 100.");
        }

        // Validate delivery charge
        if (!Number.isFinite(deliveryCharge) || deliveryCharge < 0) {
            throw new Error("Delivery charge cannot be negative.");
        }

        const subtotal = foodPrice * quantity;
        const discountAmount = subtotal * discountPercentage / 100;
        const finalAmount = subtotal - discountAmount + deliveryCharge;

        // Save this order in history
        const receipt =
            `Subtotal: ₹${subtotal.toFixed(2)}, ` +
            `Discount: ₹${discountAmount.toFixed(2)}, ` +
            `Delivery: ₹${deliveryCharge.toFixed(2)}, ` +
            `Final Amount: ₹${finalAmount.toFixed(2)}`;

        this.orderHistory.push(receipt);

        return finalAmount;
    }

    // Display order history
    displayOrderHistory(): void {
        console.log("\n--- Order History ---");

        if (this.orderHistory.length === 0) {
            console.log("No orders found.");
            return;
        }

        for (let i = 0; i < this.orderHistory.length; i++) {
            console.log(`Order ${i + 1}: ${this.orderHistory[i]}`);
        }
    }

    // Generate receipt
    generateReceipt(orderNumber: number): void {
        if (
            !Number.isInteger(orderNumber) ||
            orderNumber < 1 ||
            orderNumber > this.orderHistory.length
        ) {
            console.log("Invalid order number.");
            return;
        }

        console.log(`\n--- Receipt for Order ${orderNumber} ---`);
        console.log(this.orderHistory[orderNumber - 1]);
    }
}

// Create an object
const order = new FoodOrder();

try {
    // Example 1: Food price and quantity
    console.log("--- Order 1 ---");
    console.log(
        "Final Bill: ₹" + order.calculateBill(200, 2).toFixed(2)
    );

    // Example 2: Food price, quantity, and discount
    console.log("\n--- Order 2 ---");
    console.log(
        "Final Bill: ₹" + order.calculateBill(300, 2, 10).toFixed(2)
    );

    // Example 3: Food price, quantity, discount, and delivery
    console.log("\n--- Order 3 ---");
    console.log(
        "Final Bill: ₹" + order.calculateBill(500, 2, 10, 40).toFixed(2)
    );

    // Display saved orders
    order.displayOrderHistory();

    // Generate a receipt for order 3
    order.generateReceipt(3);

} catch (error) {
    console.log(
        error instanceof Error ? error.message : "An unexpected error occurred."
    );
}
