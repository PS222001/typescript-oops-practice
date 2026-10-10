"use strict";
class Employee {
    employeeId;
    name;
    salary;
    // Company name cannot be changed after initialization
    companyName = "ABC Technologies";
    // Shared by all Employee objects
    static employeeCount = 0;
    constructor(employeeId, name, salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.salary = salary;
        Employee.employeeCount++;
    }
    // Parent method
    calculateBonus() {
        return 0;
    }
}
// Developer
class Developer extends Employee {
    calculateBonus() {
        return this.salary * 0.10;
    }
}
// Manager
class Manager extends Employee {
    calculateBonus() {
        return this.salary * 0.20;
    }
}
// Intern
class Intern extends Employee {
    calculateBonus() {
        return this.salary * 0.05;
    }
}
// Main function
function calculateEmployeeBonus() {
    const employeeId = Number(document.getElementById("employeeId").value);
    const name = document.getElementById("name").value;
    const salary = Number(document.getElementById("salary").value);
    const employeeType = document.getElementById("employeeType").value;
    // Runtime polymorphism
    let employee;
    if (employeeType === "Developer") {
        employee = new Developer(employeeId, name, salary);
    }
    else if (employeeType === "Manager") {
        employee = new Manager(employeeId, name, salary);
    }
    else {
        employee = new Intern(employeeId, name, salary);
    }
    const bonus = employee.calculateBonus();
    const message = `Company: ${employee.companyName}<br>
         Employee ID: ${employeeId}<br>
         Name: ${name}<br>
         Employee Type: ${employeeType}<br>
         Salary: ₹${salary}<br>
         Bonus: ₹${bonus}<br>
         Total Employees: ${Employee.employeeCount}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
