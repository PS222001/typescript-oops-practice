class BankAccount {
    private accountNumber : number;
    private balance : number;

    constructor(accountNumber : number,balance : number){
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    
    // Public method to deposit money
    public depositeMoney(amount:number):void{
        this.balance = this.balance + amount;
        console.log("₹" + amount + " deposited successfully");
    }

      // Public method to withdraw money
    public withdraw(amount:number):void{
        if(amount<=this.balance){
this.balance = this.balance - amount;
        console.log("₹" + amount + " withdrawn successfully");
    } else {
        console.log("Insufficient balance");
    }
}
// Public method to display balance
public displayBalance(): void {
    console.log("Account Number : ", this.accountNumber);
    console.log("Current Balance: ₹" + this.balance);
}
}

//Create Bank Account
let account = new BankAccount(1001,5000);

//Deposite
account.depositeMoney(5000);

//Withdraw 
account.withdraw(2000);

//Balance
account.displayBalance();