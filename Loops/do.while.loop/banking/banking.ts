import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let balance: number = 50000;
let depositCount: number = 0;
let withdrawalCount: number = 0;

let transactionHistory: string[] = [];

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

async function bankingSystem(): Promise<void> {

    let choice: number;

    do {

        console.log("\n===== BANKING MENU =====");
        console.log("1. Deposit");
        console.log("2. Withdraw");
        console.log("3. Balance");
        console.log("4. Transaction History");
        console.log("5. Exit");

        choice = Number(await askQuestion("Enter your choice: "));

        switch (choice) {

            case 1:
                let deposit: number =
                    Number(await askQuestion("Enter deposit amount: ₹"));

                if (deposit > 0) {
                    balance += deposit;
                    depositCount++;

                    transactionHistory.push(
                        `Deposited ₹${deposit}`
                    );

                    console.log(`₹${deposit} deposited successfully.`);
                    console.log(`Current Balance: ₹${balance}`);
                } else {
                    console.log("Invalid deposit amount.");
                }
                break;

            case 2:
                let withdraw: number =
                    Number(await askQuestion("Enter withdrawal amount: ₹"));

                if (withdraw <= 0) {
                    console.log("Invalid withdrawal amount.");
                }
                else if (withdraw > balance) {
                    console.log("Insufficient balance.");
                }
                else {
                    balance -= withdraw;
                    withdrawalCount++;

                    transactionHistory.push(
                        `Withdrawn ₹${withdraw}`
                    );

                    console.log(`₹${withdraw} withdrawn successfully.`);
                    console.log(`Current Balance: ₹${balance}`);
                }
                break;

            case 3:
                console.log(`Current Balance: ₹${balance}`);
                console.log(`Deposits: ${depositCount}`);
                console.log(`Withdrawals: ${withdrawalCount}`);
                break;

            case 4:
                console.log("\n===== TRANSACTION HISTORY =====");

                if (transactionHistory.length === 0) {
                    console.log("No transactions yet.");
                } else {
                    transactionHistory.forEach(
                        (transaction, index) => {
                            console.log(`${index + 1}. ${transaction}`);
                        }
                    );
                }
                break;

            case 5:
                console.log("Thank you for using the banking system.");
                break;

            default:
                console.log("Invalid choice.");
        }

    } while (choice !== 5);

    rl.close();
}

bankingSystem();