"use strict";
class BankAccount {
    accountNumber;
    holderName;
    balance;
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    // Deposit
    deposit(amount) {
        if (amount <= 0) {
            return "Deposit amount must be greater than 0.";
        }
        this.balance += amount;
        return `₹${amount} deposited successfully.`;
    }
    // Withdraw
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
    // Display Balance
    displayBalance() {
        return `Account Holder: ${this.holderName}<br>
        Account Number: ${this.accountNumber}<br>
        Balance: ₹${this.balance}`;
    }
} //banking logic over
//CREATE ACCOUNT , DEPOSITE AMOUNT , WITHDRAW AMOUNT
// Create account
const account = new BankAccount(1001, "Pavithra", 50000);
// Deposit
function depositMoney() {
    const amount = Number(document.getElementById("depositAmount").value);
    const message = account.deposit(amount);
    // Show in Console
    console.log(message);
    // Show in Browser
    document.getElementById("result").innerHTML = message;
}
// Withdraw
function withdrawMoney() {
    const amount = Number(document.getElementById("withdrawAmount").value);
    const message = account.withdraw(amount);
    // Show in Console
    console.log(message);
    // Show in Browser
    document.getElementById("result").innerHTML = message;
}
// Display Balance
function showBalance() {
    const message = account.displayBalance();
    // Show in Console
    console.log(message);
    // Show in Browser
    document.getElementById("result").innerHTML = message;
}
