class Employee{
    constructor(
       public employeeId: number , 
       public name : string ,
       public basicSalary: number)
       {
        if(basicSalary<=0){
            throw new Error ("Basic salary must be greater than zero");
        }
       }
}

// Child class
class PermanentEmployee extends Employee {

    constructor(
        employeeId: number,
        name: string,
        basicSalary: number,
        public allowances: number,
        public deductions: number,
        public performanceBonus: number
    ) {
        super(employeeId, name, basicSalary);

        if (allowances < 0 || deductions < 0 || performanceBonus < 0) {
            throw new Error(
                "Allowances, deductions, and bonus cannot be negative."
            );
        }
    }

    // Calculate gross salary
    calculateGrossSalary():number{
        return this.basicSalary+this.allowances+this.performanceBonus;
    }

    // Calculate total deductions
    calculateTotalDeductions(): number {
        return this.deductions;
    }

    // Calculate net salary
    calculateNetSalary(): number {
        return this.calculateGrossSalary() - this.calculateTotalDeductions();
    }

    // Display payslip
    displayPayslip(): void {
        console.log("========== EMPLOYEE PAYSLIP ==========");
        console.log(`Employee ID       : ${this.employeeId}`);
        console.log(`Employee Name     : ${this.name}`);
        console.log(`Basic Salary      : ₹${this.basicSalary}`);
        console.log(`Allowances         : ₹${this.allowances}`);
        console.log(`Performance Bonus : ₹${this.performanceBonus}`);
        console.log("--------------------------------------");
        console.log(`Gross Salary      : ₹${this.calculateGrossSalary()}`);
        console.log(`Total Deductions  : ₹${this.calculateTotalDeductions()}`);
        console.log("--------------------------------------");
        console.log(`Net Salary        : ₹${this.calculateNetSalary()}`);
        console.log("======================================");
    }
}

// Create employee object
const employee1 = new PermanentEmployee(
    101,
    "Pavithra",
    30000,
    5000,
    2000,
    3000
);

// Display payslip
employee1.displayPayslip();
