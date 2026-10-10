abstract class Product {

    // Private fields = Encapsulation
    private productId: number;
    private name: string;
    private price: number;

    constructor(
        productId: number,
        name: string,
        price: number
    ) {
        // Validation
        if (price <= 0) {
            throw new Error("Price must be greater than 0.");
        }

        this.productId = productId;
        this.name = name;
        this.price = price;
    }

    // Getter methods
    public getProductId(): number {
        return this.productId;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    // Abstract method
    public abstract calculateFinalPrice(): number;
}


// Mobile
class Mobile extends Product {

    public calculateFinalPrice(): number {

        const gst = this.getPrice() * 0.18;
        const discount = this.getPrice() * 0.10;

        return this.getPrice() + gst - discount;
    }
}


// Laptop
class Laptop extends Product {

    public calculateFinalPrice(): number {

        const gst = this.getPrice() * 0.18;
        const discount = this.getPrice() * 0.15;

        return this.getPrice() + gst - discount;
    }
}


// Tablet
class Tablet extends Product {

    public calculateFinalPrice(): number {

        const gst = this.getPrice() * 0.12;
        const discount = this.getPrice() * 0.08;

        return this.getPrice() + gst - discount;
    }
}


// Runtime Polymorphism
function calculateProductPrice(): void {

    try {

        const productId = Number(
            (document.getElementById("productId") as HTMLInputElement).value
        );

        const name = (
            document.getElementById("name") as HTMLInputElement
        ).value;

        const price = Number(
            (document.getElementById("price") as HTMLInputElement).value
        );

        const productType = (
            document.getElementById("productType") as HTMLSelectElement
        ).value;


        // Polymorphism
        let product: Product;


        if (productType === "Mobile") {

            product = new Mobile(productId, name, price);

        } else if (productType === "Laptop") {

            product = new Laptop(productId, name, price);

        } else {

            product = new Tablet(productId, name, price);
        }


        const finalPrice = product.calculateFinalPrice();


        const message =
            `Product ID: ${product.getProductId()}<br>
             Product Name: ${product.getName()}<br>
             Product Type: ${productType}<br>
             Original Price: ₹${product.getPrice()}<br>
             Final Price: ₹${finalPrice.toFixed(2)}`;


        console.log(message.replace(/<br>/g, "\n"));

        document.getElementById("result")!.innerHTML = message;

    } catch (error) {

        document.getElementById("result")!.innerHTML =
            (error as Error).message;
    }
}