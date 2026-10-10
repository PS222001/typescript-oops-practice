"use strict";
class Loan {
    loanId;
    customerName;
    loanAmount;
    constructor(loanId, customerName, loanAmount) {
        this.loanId = loanId;
        this.customerName = customerName;
        this.loanAmount = loanAmount;
    }
}
// Home Loan
class HomeLoan extends Loan {
    constructor(loanId, customerName, loanAmount) {
        super(loanId, customerName, loanAmount);
    }
    calculateInterest() {
        return this.loanAmount * 0.08;
    }
}
// Car Loan
class CarLoan extends Loan {
    constructor(loanId, customerName, loanAmount) {
        super(loanId, customerName, loanAmount);
    }
    calculateInterest() {
        return this.loanAmount * 0.10;
    }
}
// Education Loan
class EducationLoan extends Loan {
    constructor(loanId, customerName, loanAmount) {
        super(loanId, customerName, loanAmount);
    }
    calculateInterest() {
        return this.loanAmount * 0.06;
    }
}
// Runtime Polymorphism
function calculateLoanInterest() {
    const loanId = Number(document.getElementById("loanId").value);
    const customerName = document.getElementById("customerName").value;
    const loanAmount = Number(document.getElementById("loanAmount").value);
    const loanType = document.getElementById("loanType").value;
    let loan;
    if (loanType === "Home") {
        loan = new HomeLoan(loanId, customerName, loanAmount);
    }
    else if (loanType === "Car") {
        loan = new CarLoan(loanId, customerName, loanAmount);
    }
    else {
        loan = new EducationLoan(loanId, customerName, loanAmount);
    }
    const interest = loan.calculateInterest();
    const message = `Loan ID: ${loanId}<br>
         Customer Name: ${customerName}<br>
         Loan Type: ${loanType}<br>
         Loan Amount: ₹${loanAmount}<br>
         Interest: ₹${interest}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
