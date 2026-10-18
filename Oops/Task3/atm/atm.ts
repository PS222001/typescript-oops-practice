
abstract class ATMTransaction {
    constructor(protected amount: number) {}

    abstract validateTransaction(): boolean;
    abstract executeTransaction(): void;
}

class DepositTransaction extends ATMTransaction {
    constructor(amount: number, private account: { balance: number }) {
        super(amount);
    }

    validateTransaction(): boolean {
        return this.amount > 0;
    }

    executeTransaction(): void {
        if (!this.validateTransaction()) {
            console.log("Invalid deposit.");
            return;
        }

        this.account.balance += this.amount;
        console.log("Deposited: ₹" + this.amount);
    }
}

class WithdrawTransaction extends ATMTransaction {
    constructor(amount: number, private account: { balance: number }) {
        super(amount);
    }

    validateTransaction(): boolean {
        return this.amount > 0 &&
            this.amount <= this.account.balance;
    }

    executeTransaction(): void {
        if (!this.validateTransaction()) {
            console.log("Withdrawal rejected.");
            return;
        }

        this.account.balance -= this.amount;
        console.log("Withdrawn: ₹" + this.amount);
    }
}

class TransferTransaction extends ATMTransaction {
    constructor(
        amount: number,
        private sender: { balance: number },
        private receiver: { balance: number }
    ) {
        super(amount);
    }

    validateTransaction(): boolean {
        return this.amount > 0 &&
            this.sender !== this.receiver &&
            this.sender.balance >= this.amount;
    }

    executeTransaction(): void {
        if (!this.validateTransaction()) {
            console.log("Transfer rejected.");
            return;
        }

        this.sender.balance -= this.amount;
        this.receiver.balance += this.amount;
        console.log("Transferred: ₹" + this.amount);
    }
}

const account = { balance: 5000 };
const receiver = { balance: 1000 };

const transactions: ATMTransaction[] = [
    new DepositTransaction(500, account),
    new WithdrawTransaction(1000, account),
    new TransferTransaction(1500, account, receiver)
];

transactions.forEach(t => t.executeTransaction());

console.log("Account Balance:", account.balance);
console.log("Receiver Balance:", receiver.balance);
