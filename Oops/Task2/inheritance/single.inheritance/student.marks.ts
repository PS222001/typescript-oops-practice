class Student{

    // Parent class variables and class
    name:string;
    rollNumber:number;

    constructor(name:string,rollNumber:number){
        this.name=name;
        this.rollNumber=rollNumber;
    }
}

class Result extends Student{
    // Child class variables
    mark1:number;
    mark2:number;
    mark3:number;

    //Child constructor
    constructor(
        name:string,
        rollNumber: number,
        mark1: number,
        mark2: number,
        mark3: number
    ){
        // Call parent constructor
        super(name, rollNumber);

        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
    }
        // Calculate and display result
        displayResult():void{
            let total=this.mark1+this.mark2+this.mark3;

            let average = total/3;

            let grade:string;
            if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }
        console.log("Name:", this.name);
        console.log("Roll Number:", this.rollNumber);
        console.log("Mark 1:", this.mark1);
        console.log("Mark 2:", this.mark2);
        console.log("Mark 3:", this.mark3);
        console.log("Total Marks:", total);
        console.log("Average:", average);
        console.log("Grade:", grade);
        }
}

// Create Result object
let result = new Result("Anitha", 101, 85, 90, 80);

// Display result
result.displayResult();
