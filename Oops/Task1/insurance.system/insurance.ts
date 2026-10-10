abstract class Insurance{
     protected policyNumber: number;
    protected customerName: string;
    protected amount: number;

    constructor(
        policyNumber: number,
        customerName: string,
        amount: number
    ) {
        this.policyNumber = policyNumber;
        this.customerName = customerName;
        this.amount = amount;
    }

    // Abstract method
    public abstract calculatePremium(): number;
}


// Health Insurance
class HealthInsurance extends Insurance {

    public calculatePremium(): number {
        return this.amount * 0.05;
    }
}


// Vehicle Insurance
class VehicleInsurance extends Insurance {

    public calculatePremium(): number {
        return this.amount * 0.03;
    }
}


// Life Insurance
class LifeInsurance extends Insurance {

    public calculatePremium(): number {
        return this.amount * 0.02;
    }
}


// Runtime Polymorphism
function calculateInsurancePremium(): void {

    const policyNumber = Number(
        (document.getElementById("policyNumber") as HTMLInputElement).value
    );

    const customerName = (
        document.getElementById("customerName") as HTMLInputElement
    ).value;

    const amount = Number(
        (document.getElementById("amount") as HTMLInputElement).value
    );

    const insuranceType = (
        document.getElementById("insuranceType") as HTMLSelectElement
    ).value;


    let insurance: Insurance;


    if (insuranceType === "Health") {

        insurance = new HealthInsurance(
            policyNumber,
            customerName,
            amount
        );

    } else if (insuranceType === "Vehicle") {

        insurance = new VehicleInsurance(
            policyNumber,
            customerName,
            amount
        );

    } else {

        insurance = new LifeInsurance(
            policyNumber,
            customerName,
            amount
        );
    }


    // Runtime polymorphism
    const premium = insurance.calculatePremium();


    const message =
        `Policy Number: ${policyNumber}<br>
         Customer Name: ${customerName}<br>
         Insurance Type: ${insuranceType}<br>
         Insurance Amount: ₹${amount}<br>
         Premium: ₹${premium}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}