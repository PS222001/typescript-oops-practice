abstract class Loan {

    protected loanId: number;
    protected customerName: string;
    protected loanAmount: number;

    constructor(
        loanId: number,
        customerName: string,
        loanAmount: number
    ) {
        this.loanId = loanId;
        this.customerName = customerName;
        this.loanAmount = loanAmount;
    }

    // Abstract method
    public abstract calculateInterest(): number;
}


// Home Loan
class HomeLoan extends Loan {

    constructor(
        loanId: number,
        customerName: string,
        loanAmount: number
    ) {
        super(loanId, customerName, loanAmount);
    }

    public calculateInterest(): number {
        return this.loanAmount * 0.08;
    }
}


// Car Loan
class CarLoan extends Loan {

    constructor(
        loanId: number,
        customerName: string,
        loanAmount: number
    ) {
        super(loanId, customerName, loanAmount);
    }

    public calculateInterest(): number {
        return this.loanAmount * 0.10;
    }
}


// Education Loan
class EducationLoan extends Loan {

    constructor(
        loanId: number,
        customerName: string,
        loanAmount: number
    ) {
        super(loanId, customerName, loanAmount);
    }

    public calculateInterest(): number {
        return this.loanAmount * 0.06;
    }
}


// Runtime Polymorphism
function calculateLoanInterest(): void {

    const loanId = Number(
        (document.getElementById("loanId") as HTMLInputElement).value
    );

    const customerName = (
        document.getElementById("customerName") as HTMLInputElement
    ).value;

    const loanAmount = Number(
        (document.getElementById("loanAmount") as HTMLInputElement).value
    );

    const loanType = (
        document.getElementById("loanType") as HTMLSelectElement
    ).value;


    let loan: Loan;


    if (loanType === "Home") {

        loan = new HomeLoan(
            loanId,
            customerName,
            loanAmount
        );

    } else if (loanType === "Car") {

        loan = new CarLoan(
            loanId,
            customerName,
            loanAmount
        );

    } else {

        loan = new EducationLoan(
            loanId,
            customerName,
            loanAmount
        );
    }


    const interest = loan.calculateInterest();


    const message =
        `Loan ID: ${loanId}<br>
         Customer Name: ${customerName}<br>
         Loan Type: ${loanType}<br>
         Loan Amount: ₹${loanAmount}<br>
         Interest: ₹${interest}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}