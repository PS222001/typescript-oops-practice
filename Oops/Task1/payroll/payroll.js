"use strict";
class Employees {
    // Encapsulation
    employeeId;
    name;
    basicSalary;
    // final equivalent in TypeScript
    companyName = "ABC Technologies";
    // Static variable
    static employeeCount = 0;
    constructor(employeeId, name, basicSalary) {
        this.employeeId = employeeId;
        this.name = name;
        this.basicSalary = basicSalary;
        Employees.employeeCount++;
    }
    // Getters
    getEmployeeId() {
        return this.employeeId;
    }
    getName() {
        return this.name;
    }
    getBasicSalary() {
        return this.basicSalary;
    }
    // Common final salary calculation
    calculateFinalSalary() {
        return this.calculateSalary()
            + this.calculateBonus()
            - this.calculateTax();
    }
}
// Developer
class Developers extends Employees {
    constructor(employeeId, name, basicSalary) {
        super(employeeId, name, basicSalary);
    }
    calculateSalary() {
        return this.getBasicSalary();
    }
    calculateBonus() {
        return this.getBasicSalary() * 0.10;
    }
    calculateTax() {
        return this.calculateSalary() * 0.05;
    }
}
// Manager
class Managers extends Employees {
    constructor(employeeId, name, basicSalary) {
        super(employeeId, name, basicSalary);
    }
    calculateSalary() {
        return this.getBasicSalary();
    }
    calculateBonus() {
        return this.getBasicSalary() * 0.20;
    }
    calculateTax() {
        return this.calculateSalary() * 0.10;
    }
}
// Tester
class Testers extends Employees {
    constructor(employeeId, name, basicSalary) {
        super(employeeId, name, basicSalary);
    }
    calculateSalary() {
        return this.getBasicSalary();
    }
    calculateBonus() {
        return this.getBasicSalary() * 0.08;
    }
    calculateTax() {
        return this.calculateSalary() * 0.05;
    }
}
// HR
class HR extends Employees {
    constructor(employeeId, name, basicSalary) {
        super(employeeId, name, basicSalary);
    }
    calculateSalary() {
        return this.getBasicSalary();
    }
    calculateBonus() {
        return this.getBasicSalary() * 0.15;
    }
    calculateTax() {
        return this.calculateSalary() * 0.08;
    }
}
// DOM function
function calculatePayroll() {
    const employeeId = Number(document.getElementById("employeeId").value);
    const name = document.getElementById("name").value;
    const basicSalary = Number(document.getElementById("basicSalary").value);
    const employeeType = document.getElementById("employeeType").value;
    // Polymorphism
    let employee;
    if (employeeType === "Developers") {
        employee = new Developers(employeeId, name, basicSalary);
    }
    else if (employeeType === "Managers") {
        employee = new Managers(employeeId, name, basicSalary);
    }
    else if (employeeType === "Testers") {
        employee = new Testers(employeeId, name, basicSalary);
    }
    else {
        employee = new HR(employeeId, name, basicSalary);
    }
    const salary = employee.calculateSalary();
    const bonus = employee.calculateBonus();
    const tax = employee.calculateTax();
    const finalSalary = employee.calculateFinalSalary();
    const message = `Company: ${employee.companyName}<br>
         Employee ID: ${employee.getEmployeeId()}<br>
         Employee Name: ${employee.getName()}<br>
         Employee Type: ${employeeType}<br>
         Basic Salary: ₹${salary}<br>
         Bonus: ₹${bonus}<br>
         Tax: ₹${tax}<br>
         Final Salary: ₹${finalSalary.toFixed(2)}<br>
         Total Employees Created: ${Employees.employeeCount}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
