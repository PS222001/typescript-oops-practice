class StudentResult{
    private studentName : string;
    private marks : number;

    constructor(studentName : string,marks : number){
        this.studentName=studentName;
        this.marks=0;

        // Use setter to validate marks
        this.setMarks(marks);

    }

    // Getter
    public getMarks(): number{
        return this.marks;
    }

    // Setter → updates marks
    public setMarks(marks:number) {
        if(marks>=0&&marks<=100){
        this.marks =marks;
        console.log("Marks Added successfully");
        } else {
            console.log("Invalid marks. Enter marks between 0 and 100.");
        }
    }
    // Display result
    public displayResult(): void {
        console.log("Student Name:", this.studentName);
        console.log("Marks:", this.marks);
    }
}


// Create student
let student = new StudentResult("Nila", 85);
// Display result
student.displayResult();
// Update marks using setter
student.setMarks(95);
// Get marks using getter
console.log("Updated Marks:", student.getMarks());