"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let balance = 50000;
let depositCount = 0;
let withdrawalCount = 0;
let transactionHistory = [];
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}
async function bankingSystem() {
    let choice;
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
                let deposit = Number(await askQuestion("Enter deposit amount: ₹"));
                if (deposit > 0) {
                    balance += deposit;
                    depositCount++;
                    transactionHistory.push(`Deposited ₹${deposit}`);
                    console.log(`₹${deposit} deposited successfully.`);
                    console.log(`Current Balance: ₹${balance}`);
                }
                else {
                    console.log("Invalid deposit amount.");
                }
                break;
            case 2:
                let withdraw = Number(await askQuestion("Enter withdrawal amount: ₹"));
                if (withdraw <= 0) {
                    console.log("Invalid withdrawal amount.");
                }
                else if (withdraw > balance) {
                    console.log("Insufficient balance.");
                }
                else {
                    balance -= withdraw;
                    withdrawalCount++;
                    transactionHistory.push(`Withdrawn ₹${withdraw}`);
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
                }
                else {
                    transactionHistory.forEach((transaction, index) => {
                        console.log(`${index + 1}. ${transaction}`);
                    });
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
