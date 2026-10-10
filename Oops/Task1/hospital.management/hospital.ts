// Base class
class Person {

    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo(): string {
        return `
            Name: ${this.name}<br>
            Age: ${this.age}<br>
        `;
    }
}


// Doctor class
class Doctor extends Person {

    private specialization: string;

    constructor(
        name: string,
        age: number,
        specialization: string
    ) {
        super(name, age);
        this.specialization = specialization;
    }

    public override displayInfo(): string {
        return `
            <strong>Doctor</strong><br>
            ${super.displayInfo()}
            Specialization: ${this.specialization}<br>
        `;
    }
}


// Nurse class
class Nurse extends Person {

    private department: string;

    constructor(
        name: string,
        age: number,
        department: string
    ) {
        super(name, age);
        this.department = department;
    }

    public override displayInfo(): string {
        return `
            <strong>Nurse</strong><br>
            ${super.displayInfo()}
            Department: ${this.department}<br>
        `;
    }
}


// Patient class
class Patient extends Person {

    private disease: string;

    constructor(
        name: string,
        age: number,
        disease: string
    ) {
        super(name, age);
        this.disease = disease;
    }

    public override displayInfo(): string {
        return `
            <strong>Patient</strong><br>
            ${super.displayInfo()}
            Disease: ${this.disease}<br>
        `;
    }
}


// Show extra input based on role
function showExtraField(): void {

    const role =
        (document.getElementById("role") as HTMLSelectElement).value;

    const extraField =
        document.getElementById("extraField")!;

    if (role === "doctor") {

        extraField.innerHTML = `
            <label>Specialization:</label>
            <input type="text" id="specialization">
        `;

    } else if (role === "nurse") {

        extraField.innerHTML = `
            <label>Department:</label>
            <input type="text" id="department">
        `;

    } else if (role === "patient") {

        extraField.innerHTML = `
            <label>Disease:</label>
            <input type="text" id="disease">
        `;

    } else {

        extraField.innerHTML = "";
    }
}


// Display information
function displayHospitalInfo(): void {

    const name =
        (document.getElementById("name") as HTMLInputElement).value;

    const age =
        Number(
            (document.getElementById("age") as HTMLInputElement).value
        );

    const role =
        (document.getElementById("role") as HTMLSelectElement).value;

    const result =
        document.getElementById("result")!;


    if (role === "doctor") {

        const specialization =
            (document.getElementById("specialization") as HTMLInputElement).value;

        const doctor = new Doctor(
            name,
            age,
            specialization
        );

        result.innerHTML = doctor.displayInfo();


    } else if (role === "nurse") {

        const department =
            (document.getElementById("department") as HTMLInputElement).value;

        const nurse = new Nurse(
            name,
            age,
            department
        );

        result.innerHTML = nurse.displayInfo();


    } else if (role === "patient") {

        const disease =
            (document.getElementById("disease") as HTMLInputElement).value;

        const patient = new Patient(
            name,
            age,
            disease
        );

        result.innerHTML = patient.displayInfo();


    } else {

        result.innerHTML = "Please select a role.";
    }
}