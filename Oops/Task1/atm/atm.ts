class Account {

    // Encapsulation: private fields
    private accountNumber: number;
    private pin: number;
    private balance: number;

    constructor(
        accountNumber: number,
        pin: number,
        balance: number
    ) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = balance;
    }


    // PIN validation
    public validatePin(inputPin: number): boolean {

        return this.pin === inputPin;
    }


    // Deposit
    public deposit(amount: number): string {

        if (amount <= 0) {
            return "Deposit amount must be greater than 0.";
        }

        this.balance += amount;

        return `₹${amount} deposited successfully.`;
    }


    // Withdrawal
    public withdraw(amount: number): string {

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
    public checkBalance(): number {

        return this.balance;
    }
}


// Inheritance
class SavingsAccount extends Account {

    public accountType: string = "Savings Account";
}


class CurrentAccount extends Account {

    public accountType: string = "Current Account";
}


// Create account
const account = new SavingsAccount(
    1001,
    1234,
    50000
);


// PIN validation
function validateAccountPin(): void {

    const inputPin = Number(
        (document.getElementById("pin") as HTMLInputElement).value
    );

    const result = document.getElementById("result")!;


    if (account.validatePin(inputPin)) {

        result.innerHTML = "PIN validated successfully.";

    } else {

        result.innerHTML = "Invalid PIN.";
    }
}


// Deposit
function depositMoney(): void {

    const amount = Number(
        (document.getElementById("amount") as HTMLInputElement).value
    );

    const message = account.deposit(amount);

    console.log(message);

    document.getElementById("result")!.innerHTML = message;
}


// Withdrawal
function withdrawMoney(): void {

    const amount = Number(
        (document.getElementById("amount") as HTMLInputElement).value
    );

    const message = account.withdraw(amount);

    console.log(message);

    document.getElementById("result")!.innerHTML = message;
}


// Check balance
function checkBalance(): void {

    const balance = account.checkBalance();

    const message =
        `Account Type: ${account.accountType}<br>
         Account Number: 1001<br>
         Current Balance: ₹${balance}`;

    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}