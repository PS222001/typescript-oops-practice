"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//CREATE STUDENT LIST IN ARRAY LATER
let students = [];
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
}
//CALCULATE GRADE
function calculateGrade(average) {
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
async function addStudent() {
    let rollNumber = Number(await askQuestion("Enter Roll Number: "));
    let name = await askQuestion("Enter Student Name: ");
    let marks = [];
    console.log("\nEnter marks for 5 subjects:");
    for (let i = 0; i < 5; i++) {
        let mark = Number(await askQuestion(`Subject ${i + 1}: `));
        marks.push(mark);
    }
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / 5;
    let grade = calculateGrade(average);
    let student = {
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
function displayStudents() {
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
function calculateResult() {
    students.forEach((student) => {
        student.total = student.marks.reduce((sum, mark) => sum + mark, 0);
        student.average = student.total / 5;
        student.grade = calculateGrade(student.average);
    });
    console.log("Results calculated successfully.");
}
function findTopper() {
    if (students.length === 0) {
        console.log("No students available.");
        return;
    }
    let topper = students[0];
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
async function studentResultSystem() {
    let choice;
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
