class Employee{
    public name : string;
    private salary : number;
    protected department : string;

    constructor(name : string,salary : number,department : string){
        this.name =name;
        this.salary=salary;
        this.department=department;
    }

    //Display details
    displayEmployeeDetails() : void{
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
        console.log("Department:", this.department);
    }
}

let employee1 = new Employee("Pavithra", 50000, "IT");
employee1.displayEmployeeDetails();

