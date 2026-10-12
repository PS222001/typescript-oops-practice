"use strict";
class BankAccount {
    // Encapsulation: private properties
    accountNumber;
    holderName;
    balance;
    // Store transaction history
    transactions = [];
    // Constructor initializes account details
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
        this.transactions.push(`${new Date().toLocaleString()} - Account opened with ₹${balance}`);
    }
    // Deposit money
    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than zero.";
        }
        this.balance += amount;
        this.transactions.push(`${new Date().toLocaleString()} - Deposited ₹${amount}`);
        return `₹${amount} deposited successfully.`;
    }
    // Withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            return "Withdrawal amount must be greater than zero.";
        }
        if (amount > this.balance) {
            return "Insufficient balance!";
        }
        this.balance -= amount;
        this.transactions.push(`${new Date().toLocaleString()} - Withdrawn ₹${amount}`);
        return `₹${amount} withdrawn successfully.`;
    }
    // Balance enquiry
    checkBalance() {
        return `Account Holder: ${this.holderName}<br>
                Account Number: ${this.accountNumber}<br>
                Available Balance: ₹${this.balance}`;
    }
    // Display transaction history
    getTransactionHistory() {
        return this.transactions
            .map(transaction => `<p>${transaction}</p>`)
            .join("");
    }
}
// Create an account
const account = new BankAccount(1001, "Pavithra", 50000);
// Display messages on the webpage
function display(message) {
    document.getElementById("result").innerHTML = message;
}
function depositMoney() {
    display(account.deposit(5000));
}
function withdrawMoney() {
    display(account.withdraw(2000));
}
function checkBalance() {
    display(account.checkBalance());
}
function showHistory() {
    display(account.getTransactionHistory());
}
