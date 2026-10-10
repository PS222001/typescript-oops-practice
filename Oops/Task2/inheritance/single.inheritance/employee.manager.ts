class Employees{
    // Parent class variables and constructor
    name : string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employees{
    bonus : number;

    constructor(name: string, salary: number,bonus : number) {
        super(name, salary);
        this.bonus = bonus;
    }
    // Calculate and display total salary
    displaySalary(): void {

        let totalSalary = this.salary + this.bonus;

        console.log("Name:", this.name);
        console.log("Basic Salary: ₹" + this.salary);
        console.log("Bonus: ₹" + this.bonus);
        console.log("Total Salary: ₹" + totalSalary);
    }
}

// Create Manager object
let manager = new Manager("Vanitha", 50000, 10000);

// Display salary
manager.displaySalary();