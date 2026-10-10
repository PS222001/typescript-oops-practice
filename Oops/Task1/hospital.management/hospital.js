"use strict";
// Base class
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `
            Name: ${this.name}<br>
            Age: ${this.age}<br>
        `;
    }
}
// Doctor class
class Doctor extends Person {
    specialization;
    constructor(name, age, specialization) {
        super(name, age);
        this.specialization = specialization;
    }
    displayInfo() {
        return `
            <strong>Doctor</strong><br>
            ${super.displayInfo()}
            Specialization: ${this.specialization}<br>
        `;
    }
}
// Nurse class
class Nurse extends Person {
    department;
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    displayInfo() {
        return `
            <strong>Nurse</strong><br>
            ${super.displayInfo()}
            Department: ${this.department}<br>
        `;
    }
}
// Patient class
class Patient extends Person {
    disease;
    constructor(name, age, disease) {
        super(name, age);
        this.disease = disease;
    }
    displayInfo() {
        return `
            <strong>Patient</strong><br>
            ${super.displayInfo()}
            Disease: ${this.disease}<br>
        `;
    }
}
// Show extra input based on role
function showExtraField() {
    const role = document.getElementById("role").value;
    const extraField = document.getElementById("extraField");
    if (role === "doctor") {
        extraField.innerHTML = `
            <label>Specialization:</label>
            <input type="text" id="specialization">
        `;
    }
    else if (role === "nurse") {
        extraField.innerHTML = `
            <label>Department:</label>
            <input type="text" id="department">
        `;
    }
    else if (role === "patient") {
        extraField.innerHTML = `
            <label>Disease:</label>
            <input type="text" id="disease">
        `;
    }
    else {
        extraField.innerHTML = "";
    }
}
// Display information
function displayHospitalInfo() {
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const role = document.getElementById("role").value;
    const result = document.getElementById("result");
    if (role === "doctor") {
        const specialization = document.getElementById("specialization").value;
        const doctor = new Doctor(name, age, specialization);
        result.innerHTML = doctor.displayInfo();
    }
    else if (role === "nurse") {
        const department = document.getElementById("department").value;
        const nurse = new Nurse(name, age, department);
        result.innerHTML = nurse.displayInfo();
    }
    else if (role === "patient") {
        const disease = document.getElementById("disease").value;
        const patient = new Patient(name, age, disease);
        result.innerHTML = patient.displayInfo();
    }
    else {
        result.innerHTML = "Please select a role.";
    }
}
