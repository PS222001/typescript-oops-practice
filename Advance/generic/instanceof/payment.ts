class UpiPayment {
    pay(): void {
        console.log("Payment through UPI");
    }
}

class CardPayment {
    pay(): void {
        console.log("Payment through Card");
    }
}

function processPayment(payment: UpiPayment | CardPayment): void {
    if (payment instanceof UpiPayment) {
        payment.pay();
    } else if (payment instanceof CardPayment) {
        payment.pay();
    }
}

processPayment(new UpiPayment());
processPayment(new CardPayment());
