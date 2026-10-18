interface Transaction {
    transactionId : number;
    fromWallet: number;
    toWallet: number;
    amount: number;
    status: string;
}

//STEP 2: Create Wallet class
class Wallet{
    private balance: number;
    constructor(
        public readonly walletId: number,
        public ownerName: string,
        initialBalance: number
    ) {
        this.balance = initialBalance;
        
    }
    // Read wallet balance
    getBalance(): number {
        return this.balance;
    }

    // Deduct money
    debit(amount: number): void {
        this.balance -= amount;
    }

    // Add money
    credit(amount: number): void {
        this.balance += amount;
}
}

// STEP 3: Create WalletManager using Singleton
class WalletManager {

    private static instance: WalletManager;

    private wallets: Wallet[] = [];
    private transactions: Transaction[] = [];
    private nextId: number = 1001;

    // Prevent creating objects using new
    private constructor() {}

    // Return the same manager object
    static getInstance(): WalletManager {
        if (!WalletManager.instance) {
            WalletManager.instance = new WalletManager();
        }

        return WalletManager.instance;
    }
// STEP 4: Create a wallet
    createWallet(
        id: number,
        name: string,
        balance: number
    ): void {

        if (
            balance < 0 ||
            this.wallets.some(wallet => wallet.walletId === id)
        ) {
            console.log("Invalid wallet details!");
            return;
        }

        this.wallets.push(new Wallet(id, name, balance));
        console.log("Wallet created for " + name);
    }

    // STEP 5: Transfer money between wallets
    transfer(
        fromId: number,
        toId: number,
        amount: number
    ): void {

        const transactionId = this.nextId++;

        const sender = this.wallets.find(
            wallet => wallet.walletId === fromId
        );

        const receiver = this.wallets.find(
            wallet => wallet.walletId === toId
        );

        // Validate before changing any balance
        if (
            !sender ||
            !receiver ||
            fromId === toId ||
            amount <= 0 ||
            sender.getBalance() < amount
        ) {
            console.log("Transfer failed!");

            this.transactions.push({
                transactionId,
                fromWallet: fromId,
                toWallet: toId,
                amount,
                status: "Failed"
            });

            return;
        }

        // Update both balances after validation
        sender.debit(amount);
        receiver.credit(amount);

        console.log("Transfer successful!");
        console.log("Transaction ID:", transactionId);

        // STEP 6: Save transaction history
        this.transactions.push({
            transactionId,
            fromWallet: fromId,
            toWallet: toId,
            amount,
            status: "Success"
        });
    }

    // STEP 7: Display wallet balances
    showBalances(): void {
        for (const wallet of this.wallets) {
            console.log(
                wallet.ownerName + ": ₹" + wallet.getBalance()
            );
        }
    }

    // STEP 8: Display transaction history safely
    showHistory(): void {
        console.log(this.transactions.map(t => ({ ...t })));
    }
}

// STEP 9: Run the program

// Get the single manager instance
const manager = WalletManager.getInstance();

// Create two wallets
manager.createWallet(101, "Pavithra", 5000);
manager.createWallet(102, "Priya", 2000);

// Transfer ₹1000 successfully
manager.transfer(101, 102, 1000);

// Try transferring ₹10000 (insufficient balance)
manager.transfer(101, 102, 10000);

// Display final balances
console.log("----- BALANCES -----");
manager.showBalances();

// Display all transactions
console.log("----- TRANSACTION HISTORY -----");
manager.showHistory();

