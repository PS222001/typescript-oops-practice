"use strict";
class Payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
}
// UPI Payment
class UPIPayment extends Payment {
    pay() {
        return `UPI Payment of ₹${this.amount} processed successfully.`;
    }
}
// Card Payment
class CardPayment extends Payment {
    pay() {
        return `Card Payment of ₹${this.amount} processed successfully.`;
    }
}
// Net Banking Payment
class NetBankingPayment extends Payment {
    pay() {
        return `Net Banking Payment of ₹${this.amount} processed successfully.`;
    }
}
// Runtime Polymorphism
function processPayment() {
    const amount = Number(document.getElementById("amount").value);
    const paymentType = document.getElementById("paymentType").value;
    let payment;
    if (paymentType === "UPI") {
        payment = new UPIPayment(amount);
    }
    else if (paymentType === "Card") {
        payment = new CardPayment(amount);
    }
    else {
        payment = new NetBankingPayment(amount);
    }
    const message = payment.pay();
    console.log(message);
    document.getElementById("result").innerHTML = message;
}
