abstract class Payment {

    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    // Abstract method
    public abstract pay(): string;
}


// UPI Payment
class UPIPayment extends Payment {

    public pay(): string {
        return `UPI Payment of ₹${this.amount} processed successfully.`;
    }
}


// Card Payment
class CardPayment extends Payment {

    public pay(): string {
        return `Card Payment of ₹${this.amount} processed successfully.`;
    }
}


// Net Banking Payment
class NetBankingPayment extends Payment {

    public pay(): string {
        return `Net Banking Payment of ₹${this.amount} processed successfully.`;
    }
}


// Runtime Polymorphism
function processPayment(): void {

    const amount = Number(
        (document.getElementById("amount") as HTMLInputElement).value
    );

    const paymentType = (
        document.getElementById("paymentType") as HTMLSelectElement
    ).value;


    let payment: Payment;


    if (paymentType === "UPI") {

        payment = new UPIPayment(amount);

    } else if (paymentType === "Card") {

        payment = new CardPayment(amount);

    } else {

        payment = new NetBankingPayment(amount);
    }


    const message = payment.pay();


    console.log(message);

    document.getElementById("result")!.innerHTML = message;
}