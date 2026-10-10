class BankAccount {

    private accountNumber: number;
    private holderName: string;
    private balance: number;

    constructor(
        accountNumber: number,
        holderName: string,
        balance: number
    ) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    // Deposit
    public deposit(amount: number): string {

        if (amount <= 0) {
            return "Deposit amount must be greater than 0.";
        }

        this.balance += amount;

        return `₹${amount} deposited successfully.`;
    }

    // Withdraw
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

    // Display Balance
    public displayBalance(): string {

        return `Account Holder: ${this.holderName}
        Account Number: ${this.accountNumber}
        Balance: ₹${this.balance}`;
    }
} //banking logic over

//CREATE ACCOUNT , DEPOSITE AMOUNT , WITHDRAW AMOUNT
// Create account
const account = new BankAccount(1001, "Pavithra", 50000);


// Deposit
function depositMoney(): void {

    const amount = Number(
        (document.getElementById("depositAmount") as HTMLInputElement).value
    );

    const message = account.deposit(amount);

    // Show in Console
    console.log(message);

    // Show in Browser
    document.getElementById("result")!.innerHTML = message;
}


// Withdraw
function withdrawMoney(): void {

    const amount = Number(
        (document.getElementById("withdrawAmount") as HTMLInputElement).value
    );

    const message = account.withdraw(amount);

    // Show in Console
    console.log(message);

    // Show in Browser
    document.getElementById("result")!.innerHTML = message;
}


// Display Balance
function showBalance(): void {

    const message = account.displayBalance();

    // Show in Console
    console.log(message);

    // Show in Browser
    document.getElementById("result")!.innerHTML =
        message.replace(/\n/g, "<br>");
}

