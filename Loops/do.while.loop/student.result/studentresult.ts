import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface Student {
    rollNumber: number;
    name: string;
    marks: number[];
    total: number;
    average: number;
    grade: string;
}

//CREATE STUDENT LIST IN ARRAY LATER
let students: Student[] = [];

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}

//CALCULATE GRADE
function calculateGrade(average: number): string {

    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else if (average >= 50) {
        return "E";
    }
    else {
        return "F";
    }
}

//ADD STUDENT INTHE ARRAY LIST ONCE USER ENTERS
async function addStudent(): Promise<void> {

    let rollNumber: number =
        Number(await askQuestion("Enter Roll Number: "));

    let name: string =
        await askQuestion("Enter Student Name: ");

    let marks: number[] = [];

    console.log("\nEnter marks for 5 subjects:");

    for (let i = 0; i < 5; i++) {

        let mark: number =
            Number(await askQuestion(`Subject ${i + 1}: `));

        marks.push(mark);
    }

    let total: number = marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    let average: number = total / 5;

    let grade: string = calculateGrade(average);

    let student: Student = {
        rollNumber,
        name,
        marks,
        total,
        average,
        grade
    };

    students.push(student);

    console.log("\nStudent added successfully.");
}

function displayStudents(): void {

    console.log("\n===== STUDENT DETAILS =====");

    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    students.forEach((student) => {

        console.log(`\nRoll Number: ${student.rollNumber}`);
        console.log(`Name: ${student.name}`);
        console.log(`Marks: ${student.marks.join(", ")}`);
        console.log(`Total: ${student.total}`);
        console.log(`Average: ${student.average}`);
        console.log(`Grade: ${student.grade}`);

    });
}

function calculateResult(): void {

    students.forEach((student) => {

        student.total = student.marks.reduce(
            (sum, mark) => sum + mark,
            0
        );

        student.average = student.total / 5;

        student.grade = calculateGrade(student.average);
    });

    console.log("Results calculated successfully.");
}

function findTopper(): void {

    if (students.length === 0) {
        console.log("No students available.");
        return;
    }

    let topper: Student = students[0];

    for (let student of students) {

        if (student.total > topper.total) {
            topper = student;
        }
    }

    console.log("\n===== TOPPER =====");
    console.log(`Roll Number: ${topper.rollNumber}`);
    console.log(`Name: ${topper.name}`);
    console.log(`Total: ${topper.total}`);
    console.log(`Average: ${topper.average}`);
    console.log(`Grade: ${topper.grade}`);
}

async function studentResultSystem(): Promise<void> {

    let choice: number;

    do {

        console.log("\n===== STUDENT RESULT MENU =====");
        console.log("1. Add Student");
        console.log("2. Display Student");
        console.log("3. Calculate Result");
        console.log("4. Find Topper");
        console.log("5. Exit");

        choice = Number(await askQuestion("Enter your choice: "));

        switch (choice) {

            case 1:
                await addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                calculateResult();
                break;

            case 4:
                findTopper();
                break;

            case 5:
                console.log("Exiting Student Result System.");
                break;

            default:
                console.log("Invalid choice.");
        }

    } while (choice !== 5);

    rl.close();
}

studentResultSystem();