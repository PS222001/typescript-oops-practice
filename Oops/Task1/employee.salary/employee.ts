class Employee{
    protected name: string;
    protected basicSalary : number ;
    //CONSTRUCTOR
    constructor(name:string , basicSalary:number){
        this.name=name;
        this.basicSalary = basicSalary;
    }
    //COMMON METHOD
    public calculateSalary():number {
        return this.basicSalary;
    }

    public displayDetails():string{
        return `Employee Name: ${this.name}<br>
        Basic Salary : ₹${this.basicSalary}`;
    }
}

//DEVELOPER CLASS
class Developer extends Employee{
    constructor (name:string , basicSalary : number){
        super(name,basicSalary);
    }
    //METHOD OVERRIDING
    public calculateSalary(): number {
        return this.basicSalary+1000;
    }
}

//TESTER CLASS
class Tester extends Employee {
    constructor(name:string , basicSalary:number){
        super(name,basicSalary);
    }
        //METHOD OVERRIDING
        public calculateSalary(): number {
            return this.basicSalary+7000;
        }
    }

    // Manager class
class Manager extends Employee {

    constructor(name: string, basicSalary: number) {
        super(name, basicSalary);
    }

    // Method overriding
    public calculateSalary(): number {
        return this.basicSalary + 20000;
    }
}

//DISPLAY SALARY
function calculateEmployeeSalary(): void {
    const name = (document.getElementById
        ("employeeName") as HTMLInputElement).value;
    
    const salary = Number((document.getElementById
        ("basicSalary") as HTMLInputElement).value);

    const role = (document.getElementById
        ("role") as HTMLSelectElement).value;


        // Create object based on role
        let employee: Employee;
        
    if (role === "Developer") {

        employee = new Developer(name, salary);

    } else if (role === "Tester") {

        employee = new Tester(name, salary);

    } else {

        employee = new Manager(name, salary);
    }


    const finalSalary = employee.calculateSalary();

    const message =
        `Employee Name: ${name}<br>
         Role: ${role}<br>
         Basic Salary: ₹${salary}<br>
         Final Salary: ₹${finalSalary}`;


    // Show in Console
    console.log(message.replace(/<br>/g, "\n"));

    // Show in Browser
    document.getElementById("result")!.innerHTML = message;
}