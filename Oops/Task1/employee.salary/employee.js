"use strict";
class Employee {
    name;
    basicSalary;
    //CONSTRUCTOR
    constructor(name, basicSalary) {
        this.name = name;
        this.basicSalary = basicSalary;
    }
    //COMMON METHOD
    calculateSalary() {
        return this.basicSalary;
    }
    displayDetails() {
        return `Employeee Name: ${this.name}<br>
        Basic Salary : ₹${this.basicSalary}`;
    }
}
//DEVELOPER CLASS
class Developer extends Employee {
    constructor(name, basicSalary) {
        super(name, basicSalary);
    }
    //METHOD OVERRIDING
    calculateSalary() {
        return this.basicSalary + 1000;
    }
}
//TESTER CLASS
class Tester extends Employee {
    constructor(name, basicSalary) {
        super(name, basicSalary);
    }
    //METHOD OVERRIDING
    calculateSalary() {
        return this.basicSalary + 7000;
    }
}
// Manager class
class Manager extends Employee {
    constructor(name, basicSalary) {
        super(name, basicSalary);
    }
    // Method overriding
    calculateSalary() {
        return this.basicSalary + 20000;
    }
}
//DISPLAY SALARY
function calculateEmployeeSalary() {
    const name = document.getElementById("employeeName").value;
    const salary = Number(document.getElementById("basicSalary").value);
    const role = document.getElementById("role").value;
    // Create object based on role
    let employee;
    if (role === "Developer") {
        employee = new Developer(name, salary);
    }
    else if (role === "Tester") {
        employee = new Tester(name, salary);
    }
    else {
        employee = new Manager(name, salary);
    }
    const finalSalary = employee.calculateSalary();
    const message = `Employee Name: ${name}<br>
         Role: ${role}<br>
         Basic Salary: ₹${salary}<br>
         Final Salary: ₹${finalSalary}`;
    // Show in Console
    console.log(message.replace(/<br>/g, "\n"));
    // Show in Browser
    document.getElementById("result").innerHTML = message;
}
