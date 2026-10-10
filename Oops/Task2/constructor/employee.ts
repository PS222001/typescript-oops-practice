class Employee{
    employeeId:number;
    name:string;
    salary:number;

    constructor(employeeId:number=0,
    name:string="Unknown",
    salary:number=0){
        this.employeeId=employeeId;
        this.name=name;
        this.salary=salary;
    }
// Display employee details
    displayDetails(): void {
        console.log("Employee ID:", this.employeeId);
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

// Object using default constructor
let employee1 = new Employee();


// Object using parameterized constructor
let employee2 = new Employee(101, "Pavithra", 50000);

// Display details
console.log("Employee 1:");
employee1.displayDetails();

console.log("----------------");

console.log("Employee 2:");
employee2.displayDetails();