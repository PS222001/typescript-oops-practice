class ATM{
    // Private variables
    private pin: number;
    private balance: number;

    // Constructor
    constructor(pin: number, balance: number) {
        this.pin = pin;
        this.balance = balance;
    }

    //Verify pin
    public verifyPin(enteredpin:number):boolean{
        return this.pin === enteredpin;
    }

    // Deposit money
    public depositMoney(enteredPin: number, amount: number): void {

        if (this.verifyPin(enteredPin)) {
            this.balance = this.balance + amount;
            console.log("₹" + amount + " deposited successfully");
        } else {
            console.log("Incorrect PIN");
        }
    }

    // Withdraw money
    public withdrawMoney(enteredPin: number, amount: number): void {

        if (this.verifyPin(enteredPin)) {

            if (amount <= this.balance) {
                this.balance = this.balance - amount;
                console.log("₹" + amount + " withdrawn successfully");
            } else {
                console.log("Insufficient balance");
            }

        } else {
            console.log("Incorrect PIN");
        }
    }
}


// Create ATM object
let atm = new ATM(1234, 50000);

// Correct PIN → transaction allowed
atm.depositMoney(1234, 5000);

atm.withdrawMoney(1234, 2000);

// Wrong PIN → transaction not allowed
atm.withdrawMoney(1111, 5000);




