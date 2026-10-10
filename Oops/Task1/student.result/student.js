"use strict";
class Student {
    name;
    mark1 = 0;
    mark2 = 0;
    mark3 = 0;
    mark4 = 0;
    mark5 = 0;
    constructor(name) {
        this.name = name;
    }
    //Getter and Setter for MARK1
    getMark1() {
        return this.mark1;
    }
    setMark1(mark) {
        if (mark >= 0 && mark <= 100) {
            this.mark1 = mark;
        }
        else {
            throw new Error("Mark must be between 0 to 100.");
        }
    }
    //Getter and Setter for MARK2
    getMark2() {
        return this.mark2;
    }
    setMark2(mark) {
        if (mark >= 0 && mark <= 100) {
            this.mark2 = mark;
        }
        else {
            throw new Error("Mark must be between 0 to 100.");
        }
    }
    //Getter and Setter for MARK3
    getMark3() {
        return this.mark3;
    }
    setMark3(mark) {
        if (mark >= 0 && mark <= 100) {
            this.mark3 = mark;
        }
        else {
            throw new Error("Mark must be between 0 to 100.");
        }
    }
    //Getter and Setter for MARK4
    getMark4() {
        return this.mark4;
    }
    setMark4(mark) {
        if (mark >= 0 && mark <= 100) {
            this.mark4 = mark;
        }
        else {
            throw new Error("Mark must be between 0 to 100.");
        }
    }
    //Getter and Setter for MARK5
    getMark5() {
        return this.mark5;
    }
    setMark5(mark) {
        if (mark >= 0 && mark <= 100) {
            this.mark5 = mark;
        }
        else {
            throw new Error("Mark must be between 0 to 100.");
        }
    }
    //CALCULATE TOTAL
    calculateTotal() {
        return (this.mark1 +
            this.mark2 +
            this.mark3 +
            this.mark4 +
            this.mark5);
    }
    //CALCULATE AVERAGE
    calculateAverage() {
        return this.calculateTotal() / 5;
    }
    //CALCULATE GRADE
    calculateGrade() {
        const average = this.calculateAverage();
        if (average >= 90) {
            return "A";
        }
        else if (average >= 75) {
            return "B";
        }
        else if (average >= 60) {
            return "C";
        }
        else if (average >= 50) {
            return "D";
        }
        else {
            return "F";
        }
    }
    // Calculate Result
    calculateResult() {
        if (this.mark1 >= 35 &&
            this.mark2 >= 35 &&
            this.mark3 >= 35 &&
            this.mark4 >= 35 &&
            this.mark5 >= 35) {
            return "PASS";
        }
        return "FAIL";
    }
    // Display Result
    displayResult() {
        return `
            Student Name: ${this.name}<br>
            Mark 1: ${this.mark1}<br>
            Mark 2: ${this.mark2}<br>
            Mark 3: ${this.mark3}<br>
            Mark 4: ${this.mark4}<br>
            Mark 5: ${this.mark5}<br>
            Total: ${this.calculateTotal()}<br>
            Average: ${this.calculateAverage()}<br>
            Grade: ${this.calculateGrade()}<br>
            Result: ${this.calculateResult()}
        `;
    }
}
// Create Student
const student = new Student("Pavithra");
//SET MARKS (This handles the button click and gets all the input values.)
function calculateResult() {
    const mark1 = Number(document.getElementById("mark1").value);
    const mark2 = Number(document.getElementById("mark2").value);
    const mark3 = Number(document.getElementById("mark3").value);
    const mark4 = Number(document.getElementById("mark4").value);
    const mark5 = Number(document.getElementById("mark5").value);
    try {
        student.setMark1(mark1);
        student.setMark2(mark2);
        student.setMark3(mark3);
        student.setMark4(mark4);
        student.setMark5(mark5);
        const message = student.displayResult();
        // Console
        console.log(message.replace(/<br>/g, "\n"));
        // Browser
        document.getElementById("result").innerHTML = message;
    }
    catch (error) {
        document.getElementById("result").innerHTML =
            error.message;
    }
}
