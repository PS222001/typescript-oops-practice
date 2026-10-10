class Students {

    // Encapsulation
    private studentId: number;
    private name: string;
    private email: string;

    protected baseFees: number;

    constructor(
        studentId: number,
        name: string,
        email: string,
        baseFees: number
    ) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.baseFees = baseFees;
    }

    // Parent method
    public calculateFees(): number {
        return this.baseFees;
    }

    public displayDetails(): string {
        return `
            Student ID: ${this.studentId}<br>
            Name: ${this.name}<br>
            Email: ${this.email}
        `;
    }
}


// UG Student
class UGStudents extends Students {

    public calculateFees(): number {
        return this.baseFees + 10000;
    }
}


// PG Student
class PGStudents extends Students {

    public calculateFees(): number {
        return this.baseFees + 20000;
    }
}


// Main function
function calculateStudentFee(): void {

    const studentId = Number(
        (document.getElementById("studentId") as HTMLInputElement).value
    );

    const name = (
        document.getElementById("name") as HTMLInputElement
    ).value;

    const email = (
        document.getElementById("email") as HTMLInputElement
    ).value;

    const baseFees = Number(
        (document.getElementById("baseFees") as HTMLInputElement).value
    );

    const studentType = (
        document.getElementById("studentType") as HTMLSelectElement
    ).value;


    // Runtime polymorphism
    let student: Students;


    if (studentType === "UG") {

        student = new UGStudents(
            studentId,
            name,
            email,
            baseFees
        );

    } else {

        student = new PGStudents(
            studentId,
            name,
            email,
            baseFees
        );
    }


    const fees = student.calculateFees();

    const details = student.displayDetails();


    const message =
        `${details}
         Student Type: ${studentType}<br>
         Final Fees: ₹${fees}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}