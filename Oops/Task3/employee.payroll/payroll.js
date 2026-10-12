"use strict";
class Employee {
    employeeId;
    name;
    basicSalary;
    constructor(employeeId, name, basicSalary) {
        this.employeeId = employeeId;
        this.name = name;
        this.basicSalary = basicSalary;
        if (basicSalary <= 0) {
            throw new Error("Basic salary must be greater than zero");
        }
    }
}
// Child class
class PermanentEmployee extends Employee {
    allowances;
    deductions;
    performanceBonus;
    constructor(employeeId, name, basicSalary, allowances, deductions, performanceBonus) {
        super(employeeId, name, basicSalary);
        this.allowances = allowances;
        this.deductions = deductions;
        this.performanceBonus = performanceBonus;
        if (allowances < 0 || deductions < 0 || performanceBonus < 0) {
            throw new Error("Allowances, deductions, and bonus cannot be negative.");
        }
    }
    // Calculate gross salary
    calculateGrossSalary() {
        return this.basicSalary + this.allowances + this.performanceBonus;
    }
    // Calculate total deductions
    calculateTotalDeductions() {
        return this.deductions;
    }
    // Calculate net salary
    calculateNetSalary() {
        return this.calculateGrossSalary() - this.calculateTotalDeductions();
    }
    // Display payslip
    displayPayslip() {
        console.log("========== EMPLOYEE PAYSLIP ==========");
        console.log(`Employee ID       : ${this.employeeId}`);
        console.log(`Employee Name     : ${this.name}`);
        console.log(`Basic Salary      : ₹${this.basicSalary}`);
        console.log(`Allowances         : ₹${this.allowances}`);
        console.log(`Performance Bonus : ₹${this.performanceBonus}`);
        console.log("--------------------------------------");
        console.log(`Gross Salary      : ₹${this.calculateGrossSalary()}`);
        console.log(`Total Deductions  : ₹${this.calculateTotalDeductions()}`);
        console.log("--------------------------------------");
        console.log(`Net Salary        : ₹${this.calculateNetSalary()}`);
        console.log("======================================");
    }
}
// Create employee object
const employee1 = new PermanentEmployee(101, "Pavithra", 30000, 5000, 2000, 3000);
// Display payslip
employee1.displayPayslip();
