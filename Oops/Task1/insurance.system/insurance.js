"use strict";
class Insurance {
    policyNumber;
    customerName;
    amount;
    constructor(policyNumber, customerName, amount) {
        this.policyNumber = policyNumber;
        this.customerName = customerName;
        this.amount = amount;
    }
}
// Health Insurance
class HealthInsurance extends Insurance {
    calculatePremium() {
        return this.amount * 0.05;
    }
}
// Vehicle Insurance
class VehicleInsurance extends Insurance {
    calculatePremium() {
        return this.amount * 0.03;
    }
}
// Life Insurance
class LifeInsurance extends Insurance {
    calculatePremium() {
        return this.amount * 0.02;
    }
}
// Runtime Polymorphism
function calculateInsurancePremium() {
    const policyNumber = Number(document.getElementById("policyNumber").value);
    const customerName = document.getElementById("customerName").value;
    const amount = Number(document.getElementById("amount").value);
    const insuranceType = document.getElementById("insuranceType").value;
    let insurance;
    if (insuranceType === "Health") {
        insurance = new HealthInsurance(policyNumber, customerName, amount);
    }
    else if (insuranceType === "Vehicle") {
        insurance = new VehicleInsurance(policyNumber, customerName, amount);
    }
    else {
        insurance = new LifeInsurance(policyNumber, customerName, amount);
    }
    // Runtime polymorphism
    const premium = insurance.calculatePremium();
    const message = `Policy Number: ${policyNumber}<br>
         Customer Name: ${customerName}<br>
         Insurance Type: ${insuranceType}<br>
         Insurance Amount: ₹${amount}<br>
         Premium: ₹${premium}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
