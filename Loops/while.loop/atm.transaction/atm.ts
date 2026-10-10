let balance: number = 50000;
let totalTransactions: number = 0;
let continueATM: boolean = true;

const transactionType = document.getElementById(
    "transactionType"
) as HTMLSelectElement;

const amountInput = document.getElementById(
    "amount"
) as HTMLInputElement;

const processBtn = document.getElementById(
    "processBtn"
) as HTMLButtonElement;

const result = document.getElementById(
    "result"
) as HTMLDivElement;


processBtn.addEventListener("click", function (): void {

    // Start the loop for this transaction
    continueATM = true;

    const type: string = transactionType.value;
    const amount: number = Number(amountInput.value);

    while (continueATM) {

        if (type === "deposit") {

            if (amount > 0) {

                balance = balance + amount;
                totalTransactions++;

                result.innerHTML =
                    "Deposit successful!<br>" +
                    "Deposited Amount: ₹" + amount + "<br>" +
                    "Current Balance: ₹" + balance + "<br>" +
                    "Total Transactions: " + totalTransactions;

            } else {

                result.innerHTML = "Please enter a valid deposit amount.";
            }

        }

        else if (type === "withdraw") {

            if (amount <= 0) {

                result.innerHTML =
                    "Please enter a valid withdrawal amount.";

            }

            else if (amount > balance) {

                result.innerHTML =
                    "Insufficient balance!<br>" +
                    "Available Balance: ₹" + balance;

            }

            else {

                balance = balance - amount;
                totalTransactions++;

                result.innerHTML =
                    "Withdrawal successful!<br>" +
                    "Withdrawn Amount: ₹" + amount + "<br>" +
                    "Current Balance: ₹" + balance + "<br>" +
                    "Total Transactions: " + totalTransactions;
            }
        }

        else if (type === "balance") {

            totalTransactions++;

            result.innerHTML =
                "Current Balance: ₹" + balance + "<br>" +
                "Total Transactions: " + totalTransactions;
        }

        else if (type === "exit") {

            continueATM = false;

            result.innerHTML =
                "ATM session ended.<br>" +
                "Final Balance: ₹" + balance + "<br>" +
                "Total Transactions: " + totalTransactions;

        }

        else {

            result.innerHTML =
                "Please select a transaction type.";
        }

        // Stop the while loop after one button click
        continueATM = false;
    }
});

