class BankAccount {
    // Encapsulation: private properties
    private accountNumber: number;
    private holderName: string;
    private balance: number;

    // Store transaction history
    private transactions: string[] = [];

    // Constructor initializes account details
    constructor(
        accountNumber: number,
        holderName: string,
        balance: number
    ) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;

        this.transactions.push(
            `${new Date().toLocaleString()} - Account opened with ₹${balance}`
        );
    }

    // Deposit money
    deposit(amount: number): string {
        if (amount <= 0) {
            return "Deposit amount must be greater than zero.";
        }

        this.balance += amount;

        this.transactions.push(
            `${new Date().toLocaleString()} - Deposited ₹${amount}`
        );
        return `₹${amount} deposited successfully.`;
    }

    // Withdraw money
    withdraw(amount: number): string {
        if (amount <= 0) {
            return "Withdrawal amount must be greater than zero.";
        }

        if (amount > this.balance) {
            return "Insufficient balance!";
        }

        this.balance -= amount;

        this.transactions.push(
            `${new Date().toLocaleString()} - Withdrawn ₹${amount}`
        );

        return `₹${amount} withdrawn successfully.`;
    }

    // Balance enquiry
    checkBalance(): string {
        return `Account Holder: ${this.holderName}<br>
                Account Number: ${this.accountNumber}<br>
                Available Balance: ₹${this.balance}`;
    }

    // Display transaction history
    getTransactionHistory(): string {
        return this.transactions
            .map(transaction => `<p>${transaction}</p>`)
            .join("");
    }
}

// Create an account
const account = new BankAccount(1001, "Pavithra", 50000);

// Display messages on the webpage
function display(message: string): void {
    document.getElementById("result")!.innerHTML = message;
}

function depositMoney(): void {
    display(account.deposit(5000));
}

function withdrawMoney(): void {
    display(account.withdraw(2000));
}
 
function checkBalance(): void {
    display(account.checkBalance());
}

function showHistory(): void {
    display(account.getTransactionHistory());
}

