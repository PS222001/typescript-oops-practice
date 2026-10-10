"use strict";
class Employee {
    // Private properties = Encapsulation
    employeeId;
    name;
    totalWorkingDays;
    presentDays;
    constructor(employeeId, name, totalWorkingDays, presentDays) {
        this.employeeId = employeeId;
        this.name = name;
        this.totalWorkingDays = totalWorkingDays;
        this.presentDays = presentDays;
    }
    calculateAttendance() {
        return (this.presentDays / this.totalWorkingDays) * 100;
    }
    checkEligibility() {
        const attendance = this.calculateAttendance();
        if (attendance >= 75) {
            return "Eligible for Salary and Bonus";
        }
        else {
            return "Eligible for Salary but Not Eligible for Bonus";
        }
    }
    displayDetails() {
        const attendance = this.calculateAttendance();
        const eligibility = this.checkEligibility();
        return `
            Employee ID: ${this.employeeId}<br>
            Name: ${this.name}<br>
            Total Working Days: ${this.totalWorkingDays}<br>
            Present Days: ${this.presentDays}<br>
            Attendance Percentage: ${attendance.toFixed(2)}%<br>
            Eligibility: ${eligibility}
        `;
    }
}
// Button function
function calculateAttendance() {
    const employeeId = Number(document.getElementById("employeeId").value);
    const name = document.getElementById("name").value;
    const totalWorkingDays = Number(document.getElementById("totalWorkingDays").value);
    const presentDays = Number(document.getElementById("presentDays").value);
    const employee = new Employee(employeeId, name, totalWorkingDays, presentDays);
    const message = employee.displayDetails();
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
