/*Task 1 – Student Details

Create a class `Student` with:

- `public` variable `name`
- `private` variable `marks`
- `protected` variable `rollNumber`

Create methods to assign and display student details. Try accessing all three variables 
outside the class and observe the results.*/

class Student{

    // Access modifiers
    public name: string ;
    private marks : number;
    protected rollnumber: number;

    // Constructor → assigns initial values
    constructor(name:string,marks : number,rollnumber: number){
        this.name=name;
        this.rollnumber=rollnumber;
        this.marks=marks;
    }


//Display details
displayDetails(): void {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
        console.log("Roll Number:", this.rollnumber);
    }
}

// Create object and pass values through constructor
let student1 = new Student("Pavithra", 85, 101);
let student2 = new Student("Anvitha", 80, 102);

// Display details
student1.displayDetails();
student2.displayDetails();
console.log(student1.name);
console.log(student2.name);