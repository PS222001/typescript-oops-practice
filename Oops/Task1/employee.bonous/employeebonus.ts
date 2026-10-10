class Employee {

    protected employeeId: number;
    protected name: string;
    protected salary: number;

    // Company name cannot be changed after initialization
    public readonly companyName: string = "ABC Technologies";

    // Shared by all Employee objects
    public static employeeCount: number = 0;

    constructor(
        employeeId: number,
        name: string,
        salary: number
    ) {
        this.employeeId = employeeId;
        this.name = name;
        this.salary = salary;

        Employee.employeeCount++;
    }

    // Parent method
    public calculateBonus(): number {
        return 0;
    }
}


// Developer
class Developer extends Employee {

    public calculateBonus(): number {
        return this.salary * 0.10;
    }
}


// Manager
class Manager extends Employee {

    public calculateBonus(): number {
        return this.salary * 0.20;
    }
}


// Intern
class Intern extends Employee {

    public calculateBonus(): number {
        return this.salary * 0.05;
    }
}


// Main function
function calculateEmployeeBonus(): void {

    const employeeId = Number(
        (document.getElementById("employeeId") as HTMLInputElement).value
    );

    const name = (
        document.getElementById("name") as HTMLInputElement
    ).value;

    const salary = Number(
        (document.getElementById("salary") as HTMLInputElement).value
    );

    const employeeType = (
        document.getElementById("employeeType") as HTMLSelectElement
    ).value;


    // Runtime polymorphism
    let employee: Employee;


    if (employeeType === "Developer") {

        employee = new Developer(
            employeeId,
            name,
            salary
        );

    } else if (employeeType === "Manager") {

        employee = new Manager(
            employeeId,
            name,
            salary
        );

    } else {

        employee = new Intern(
            employeeId,
            name,
            salary
        );
    }


    const bonus = employee.calculateBonus();

    const message =
        `Company: ${employee.companyName}<br>
         Employee ID: ${employeeId}<br>
         Name: ${name}<br>
         Employee Type: ${employeeType}<br>
         Salary: ₹${salary}<br>
         Bonus: ₹${bonus}<br>
         Total Employees: ${Employee.employeeCount}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}