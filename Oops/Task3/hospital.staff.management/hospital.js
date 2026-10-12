"use strict";
class Person {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        if (name.trim() === "" || age <= 0 || gender.trim() === "") {
            throw new Error("Invalid personal information.");
        }
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // Public method to display personal information
    displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Gender:", this.gender);
    }
}
// Child class
class HosptialEmployee extends Person {
    employeeId;
    department;
    workingHours;
    monthlySalary;
    constructor(name, age, gender, employeeId, department, workingHours, monthlySalary) {
        super(name, age, gender);
        if (employeeId <= 0 ||
            department.trim() === "" ||
            workingHours <= 0 ||
            monthlySalary <= 0) {
            throw new Error("Invalid employee details.");
        }
        this.employeeId = employeeId;
        this.department = department;
        this.workingHours = workingHours;
        this.monthlySalary = monthlySalary;
    }
    // Calculate monthly salary
    calculateMonthlySalary() {
        return this.monthlySalary;
    }
    displayInfo() {
        super.displayInfo();
        console.log("Employee ID:", this.employeeId);
        console.log("Department:", this.department);
        console.log("Working Hours:", this.workingHours);
        console.log("Monthly Salary: ₹" + this.calculateMonthlySalary());
    }
}
// Doctor inherits HospitalEmployee
class Doctor extends HosptialEmployee {
    specialization;
    consultationFee;
    patientCount;
    constructor(name, age, gender, employeeId, department, workingHours, monthlySalary, specialization, consultationFee, patientCount) {
        super(name, age, gender, employeeId, department, workingHours, monthlySalary);
        if (specialization.trim() === "" ||
            consultationFee < 0 ||
            patientCount < 0 ||
            !Number.isInteger(patientCount)) {
            throw new Error("Invalid doctor details.");
        }
        this.specialization = specialization;
        this.consultationFee = consultationFee;
        this.patientCount = patientCount;
    }
    // Calculate consultation earnings
    calculateConsultationEarnings() {
        return this.consultationFee * this.patientCount;
    }
    // Override parent method
    displayInfo() {
        super.displayInfo();
        console.log("Specialization:", this.specialization);
        console.log("Consultation Fee: ₹" + this.consultationFee);
        console.log("Patients Consulted:", this.patientCount);
        console.log("Consultation Earnings: ₹" +
            this.calculateConsultationEarnings());
    }
}
// Create Doctor object
const doctor = new Doctor("Pavithra", 24, "Female", 101, "Cardiology", 8, 80000, "Heart Specialist", 500, 40);
// Display details
console.log("===== DOCTOR DETAILS =====");
doctor.displayInfo();
