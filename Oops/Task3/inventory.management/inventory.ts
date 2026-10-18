class Product {

    // Private properties: cannot be accessed directly outside the class
    private price: number;
    private stock: number;
    private discount: number = 0;

    private auditLog: string[] = [];

    constructor(
        public productName: string,
        price: number,
        stock: number
    ) {
        this.price = price >= 0 ? price : 0;
        this.stock = stock >= 0 ? stock : 0;
        this.auditLog.push("Product created");
    }

    // Getter: access price
    get getPrice(): number {
        return this.price;
    }

    // Setter: update price with validation
    set setPrice(newPrice: number) {
        if (newPrice > 0) {
            this.price = newPrice;
            this.auditLog.push(`Price changed to ₹${newPrice}`);
        } else {
            console.log("Price must be greater than zero.");
        }
    }

    // Getter: access stock
    get getStock(): number {
        return this.stock;
    }

    // Setter: prevent negative stock
    set setStock(newStock: number) {
        if (newStock >= 0) {
            this.stock = newStock;
            this.auditLog.push(`Stock changed to ${newStock}`);
        } else {
            console.log("Stock cannot be negative.");
        }
    }

    // Getter: access discount
    get getDiscount(): number {
        return this.discount;
    }

    // Setter: discount must be between 0 and 100
    set setDiscount(newDiscount: number) {
        if (newDiscount >= 0 && newDiscount <= 100) {
            this.discount = newDiscount;
            this.auditLog.push(`Discount changed to ${newDiscount}%`);
        } else {
            console.log("Discount must be between 0 and 100.");
        }
    }

    // Automatically check stock status
    get stockStatus(): string {
        return this.stock === 0 ? "Out of Stock" : "In Stock";
    }

    // Alert when stock is low
    checkLowStock(): void {
        if (this.stock > 0 && this.stock <= 5) {
            console.log("Low stock alert!");
        }
    }

    // Calculate inventory value after discount
    calculateInventoryValue(): number {
        const discountedPrice =
            this.price - (this.price * this.discount / 100);

        return discountedPrice * this.stock;
    }

    // Display audit log
    displayAuditLog(): void {
        console.log("Audit Log:", this.auditLog);
    }

    // Display product details
    displayProduct(): void {
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
