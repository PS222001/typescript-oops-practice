class Product {

    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public calculateDiscount(): number {
        return 0;
    }
}


// Electronics
class Electronics extends Product {

    public calculateDiscount(): number {
        return this.price * 0.10;
    }
}


// Clothing
class Clothing extends Product {

    public calculateDiscount(): number {
        return this.price * 0.20;
    }
}


// Book
class Book extends Product {

    public calculateDiscount(): number {
        return this.price * 0.05;
    }
}


// Runtime Polymorphism
function calculateProductDiscount(): void {

    const name = (
        document.getElementById("productName") as HTMLInputElement
    ).value;

    const price = Number(
        (document.getElementById("price") as HTMLInputElement).value
    );

    const productType = (
        document.getElementById("productType") as HTMLSelectElement
    ).value;


    let product: Product;


    if (productType === "Electronics") {

        product = new Electronics(name, price);

    } else if (productType === "Clothing") {

        product = new Clothing(name, price);

    } else {

        product = new Book(name, price);
    }


    const discount = product.calculateDiscount();

    const finalPrice = price - discount;


    const message =
        `Product: ${name}<br>
         Product Type: ${productType}<br>
         Original Price: ₹${price}<br>
         Discount: ₹${discount}<br>
         Final Price: ₹${finalPrice}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}