type BankAccount = {
    accountNumber: string | number;
    holderName: string;
    balance: number;
    accountType: "savings" | "current";
};

let account1: BankAccount = {
    accountNumber: 123456789,
    holderName: "Pavithra",
    balance: 50000,
    accountType: "savings"
};

let account2: BankAccount = {
    accountNumber: "ACC987654",
    holderName: "Anu",
    balance: 75000,
    accountType: "current"
};

console.log(account1);
console.log(account2);

 