"use strict";
class Students {
    // Encapsulation
    studentId;
    name;
    email;
    baseFees;
    constructor(studentId, name, email, baseFees) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.baseFees = baseFees;
    }
    // Parent method
    calculateFees() {
        return this.baseFees;
    }
    displayDetails() {
        return `
            Student ID: ${this.studentId}<br>
            Name: ${this.name}<br>
            Email: ${this.email}
        `;
    }
}
// UG Student
class UGStudents extends Students {
    calculateFees() {
        return this.baseFees + 10000;
    }
}
// PG Student
class PGStudents extends Students {
    calculateFees() {
        return this.baseFees + 20000;
    }
}
// Main function
function calculateStudentFee() {
    const studentId = Number(document.getElementById("studentId").value);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const baseFees = Number(document.getElementById("baseFees").value);
    const studentType = document.getElementById("studentType").value;
    // Runtime polymorphism
    let student;
    if (studentType === "UG") {
        student = new UGStudents(studentId, name, email, baseFees);
    }
    else {
        student = new PGStudents(studentId, name, email, baseFees);
    }
    const fees = student.calculateFees();
    const details = student.displayDetails();
    const message = `${details}
         Student Type: ${studentType}<br>
         Final Fees: ₹${fees}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
