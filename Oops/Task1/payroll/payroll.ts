abstract class Employees {

    // Encapsulation
    private employeeId: number;
    private name: string;
    private basicSalary: number;

    // final equivalent in TypeScript
    public readonly companyName: string = "ABC Technologies";

    // Static variable
    public static employeeCount: number = 0;


    constructor(
        employeeId: number,
        name: string,
        basicSalary: number
    ) {
        this.employeeId = employeeId;
        this.name = name;
        this.basicSalary = basicSalary;

        Employees.employeeCount++;
    }


    // Getters
    public getEmployeeId(): number {
        return this.employeeId;
    }

    public getName(): string {
        return this.name;
    }

    public getBasicSalary(): number {
        return this.basicSalary;
    }


    // Abstract methods
    public abstract calculateSalary(): number;

    public abstract calculateBonus(): number;

    public abstract calculateTax(): number;


    // Common final salary calculation
    public calculateFinalSalary(): number {

        return this.calculateSalary()
             + this.calculateBonus()
             - this.calculateTax();
    }
}


// Developer
class Developers extends Employees {

    constructor(
        employeeId: number,
        name: string,
        basicSalary: number
    ) {
        super(employeeId, name, basicSalary);
    }


    public calculateSalary(): number {
        return this.getBasicSalary();
    }


    public calculateBonus(): number {
        return this.getBasicSalary() * 0.10;
    }


    public calculateTax(): number {
        return this.calculateSalary() * 0.05;
    }
}


// Manager
class Managers extends Employees {

    constructor(
        employeeId: number,
        name: string,
        basicSalary: number
    ) {
        super(employeeId, name, basicSalary);
    }


    public calculateSalary(): number {
        return this.getBasicSalary();
    }


    public calculateBonus(): number {
        return this.getBasicSalary() * 0.20;
    }


    public calculateTax(): number {
        return this.calculateSalary() * 0.10;
    }
}


// Tester
class Testers extends Employees {

    constructor(
        employeeId: number,
        name: string,
        basicSalary: number
    ) {
        super(employeeId, name, basicSalary);
    }


    public calculateSalary(): number {
        return this.getBasicSalary();
    }


    public calculateBonus(): number {
        return this.getBasicSalary() * 0.08;
    }


    public calculateTax(): number {
        return this.calculateSalary() * 0.05;
    }
}


// HR
class HR extends Employees {

    constructor(
        employeeId: number,
        name: string,
        basicSalary: number
    ) {
        super(employeeId, name, basicSalary);
    }


    public calculateSalary(): number {
        return this.getBasicSalary();
    }


    public calculateBonus(): number {
        return this.getBasicSalary() * 0.15;
    }


    public calculateTax(): number {
        return this.calculateSalary() * 0.08;
    }
}


// DOM function
function calculatePayroll(): void {

    const employeeId = Number(
        (document.getElementById("employeeId") as HTMLInputElement).value
    );

    const name = (
        document.getElementById("name") as HTMLInputElement
    ).value;

    const basicSalary = Number(
        (document.getElementById("basicSalary") as HTMLInputElement).value
    );

    const employeeType = (
        document.getElementById("employeeType") as HTMLSelectElement
    ).value;


    // Polymorphism
    let employee: Employees;


    if (employeeType === "Developers") {

        employee = new Developers(
            employeeId,
            name,
            basicSalary
        );

    }
    else if (employeeType === "Managers") {

        employee = new Managers(
            employeeId,
            name,
            basicSalary
        );

    }
    else if (employeeType === "Testers") {

        employee = new Testers(
            employeeId,
            name,
            basicSalary
        );

    }
    else {

        employee = new HR(
            employeeId,
            name,
            basicSalary
        );
    }


    const salary = employee.calculateSalary();
    const bonus = employee.calculateBonus();
    const tax = employee.calculateTax();
    const finalSalary = employee.calculateFinalSalary();


    const message =
        `Company: ${employee.companyName}<br>
         Employee ID: ${employee.getEmployeeId()}<br>
         Employee Name: ${employee.getName()}<br>
         Employee Type: ${employeeType}<br>
         Basic Salary: ₹${salary}<br>
         Bonus: ₹${bonus}<br>
         Tax: ₹${tax}<br>
         Final Salary: ₹${finalSalary.toFixed(2)}<br>
         Total Employees Created: ${Employees.employeeCount}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}