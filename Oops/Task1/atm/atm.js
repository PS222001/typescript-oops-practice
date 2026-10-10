"use strict";
class Account {
    // Encapsulation: private fields
    accountNumber;
    pin;
    balance;
    constructor(accountNumber, pin, balance) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = balance;
    }
    // PIN validation
    validatePin(inputPin) {
        return this.pin === inputPin;
    }
    // Deposit
    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than 0.";
        }
        this.balance += amount;
        return `₹${amount} deposited successfully.`;
    }
    // Withdrawal
    withdraw(amount) {
        if (amount <= 0) {
            return "Withdrawal amount must be greater than 0.";
        }
        if (amount > this.balance) {
            return "Insufficient balance.";
        }
        this.balance -= amount;
        return `₹${amount} withdrawn successfully.`;
    }
    // Balance checking
    checkBalance() {
        return this.balance;
    }
}
// Inheritance
class SavingsAccount extends Account {
    accountType = "Savings Account";
}
class CurrentAccount extends Account {
    accountType = "Current Account";
}
// Create account
const account = new SavingsAccount(1001, 1234, 50000);
// PIN validation
function validateAccountPin() {
    const inputPin = Number(document.getElementById("pin").value);
    const result = document.getElementById("result");
    if (account.validatePin(inputPin)) {
        result.innerHTML = "PIN validated successfully.";
    }
    else {
        result.innerHTML = "Invalid PIN.";
    }
}
// Deposit
function depositMoney() {
    const amount = Number(document.getElementById("amount").value);
    const message = account.deposit(amount);
    console.log(message);
    document.getElementById("result").innerHTML = message;
}
// Withdrawal
function withdrawMoney() {
    const amount = Number(document.getElementById("amount").value);
    const message = account.withdraw(amount);
    console.log(message);
    document.getElementById("result").innerHTML = message;
}
// Check balance
function checkBalance() {
    const balance = account.checkBalance();
    const message = `Account Type: ${account.accountType}<br>
         Account Number: 1001<br>
         Current Balance: ₹${balance}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
