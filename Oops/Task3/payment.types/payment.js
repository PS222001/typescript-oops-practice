"use strict";
class Payment {
    transactionId;
    amount;
    status = "Pending";
    constructor(transactionId, amount) {
        this.transactionId = transactionId;
        this.amount = amount;
        if (transactionId <= 0 || amount <= 0) {
            throw new Error("Invalid transaction ID or amount.");
        }
    }
    getAmount() {
        return this.amount;
    }
    getTransactionId() {
        return this.transactionId;
    }
    // Process payment
    processPayment() {
        console.log("Processing payment...");
    }
    // Update transaction status
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    // Refund successful payment
    refundPayment() {
        if (this.status === "Successful") {
            this.status = "Refunded";
            console.log(`Transaction ${this.transactionId} refunded successfully.`);
        }
        else {
            console.log("Only successful payments can be refunded.");
        }
    }
}
// UPI Payment
class UPIPayment extends Payment {
    upiId;
    constructor(transactionId, amount, upiId) {
        super(transactionId, amount);
        this.upiId = upiId;
    }
    processPayment() {
        if (!/^[\w.-]+@[\w.-]+$/.test(this.upiId)) {
            this.setStatus("Failed");
            console.log("UPI payment failed: Invalid UPI ID.");
            return;
        }
        this.setStatus("Successful");
        console.log(`UPI payment successful: ₹${this.getAmount()}`);
    }
}
// Card Payment
class CardPayment extends Payment {
    cardNumber;
    constructor(transactionId, amount, cardNumber) {
        super(transactionId, amount);
        this.cardNumber = cardNumber;
    }
    processPayment() {
        if (!/^\d{16}$/.test(this.cardNumber)) {
            this.setStatus("Failed");
            console.log("Card payment failed: Card number must contain 16 digits.");
            return;
        }
        this.setStatus("Successful");
        console.log(`Card payment successful: ₹${this.getAmount()}`);
    }
}
// Wallet Payment
class WalletPayment extends Payment {
    walletBalance;
    constructor(transactionId, amount, walletBalance) {
        super(transactionId, amount);
        this.walletBalance = walletBalance;
    }
    processPayment() {
        if (this.walletBalance < this.getAmount()) {
            this.setStatus("Failed");
            console.log("Wallet payment failed: Insufficient balance.");
            return;
        }
        this.walletBalance -= this.getAmount();
        this.setStatus("Successful");
        console.log(`Wallet payment successful: ₹${this.getAmount()}`);
    }
}
// Store different payment objects in one array
const payments = [
    new UPIPayment(101, 1500, "pavithra@upi"),
    new CardPayment(102, 2500, "1234567890123456"),
    new WalletPayment(103, 3000, 1000),
    new UPIPayment(104, 500, "invalid-upi")
];
// Process payments using runtime polymorphism
for (const payment of payments) {
    payment.processPayment();
}
// Refund a successful transaction
console.log("\n--- Refund Transaction ---");
payments[0].refundPayment();
// Display transaction summary
let successful = 0;
let failed = 0;
let refunded = 0;
console.log("\n--- Transaction Status ---");
for (const payment of payments) {
    console.log(payment.getStatus());
    if (payment.getStatus() === "Successful") {
        successful++;
    }
    else if (payment.getStatus() === "Failed") {
        failed++;
    }
    else if (payment.getStatus() === "Refunded") {
        refunded++;
    }
}
console.log("\n--- Summary ---");
console.log("Successful:", successful);
console.log("Failed:", failed);
console.log("Refunded:", refunded);
