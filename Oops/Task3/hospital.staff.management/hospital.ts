class Person{
    private name : string;
    private age : number;
    private gender:string;

    constructor(name : string,age: number,gender: string){
        if (name.trim() === "" || age <= 0 || gender.trim() === "") {
            throw new Error("Invalid personal information.");
        }
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
        // Public method to display personal information
        displayInfo(): void{
            console.log("Name:", this.name);
            console.log("Age:", this.age);
            console.log("Gender:", this.gender);    
    }
}

// Child class
class HosptialEmployee extends Person{
    private employeeId: number;
    private department: string;
    private workingHours: number;
    private monthlySalary: number;

    constructor(
        name: string,
        age: number,
        gender: string,
        employeeId: number,
        department: string,
        workingHours: number,
        monthlySalary: number
    ){
        super(name,age,gender);
        if (
            employeeId <= 0 ||
            department.trim() === "" ||
            workingHours <= 0 ||
            monthlySalary <= 0
        ) {
            throw new Error("Invalid employee details.");
        }
        
        this.employeeId = employeeId;
        this.department = department;
        this.workingHours = workingHours;
        this.monthlySalary = monthlySalary;
    }

    // Calculate monthly salary
    calculateMonthlySalary(): number {
        return this.monthlySalary;
    }


    override displayInfo(): void {
        super.displayInfo();
        console.log("Employee ID:", this.employeeId);
        console.log("Department:", this.department);
        console.log("Working Hours:", this.workingHours);
        console.log("Monthly Salary: ₹" + this.calculateMonthlySalary());     
    }
}

// Doctor inherits HospitalEmployee
class Doctor extends HosptialEmployee {
    private specialization: string;
    private consultationFee: number;
    private patientCount: number;

    constructor(
        name: string,
        age: number,
        gender: string,
        employeeId: number,
        department: string,
        workingHours: number,
        monthlySalary: number,
        specialization: string,
        consultationFee: number,
        patientCount: number
    ){
        super(
            name,
            age,
            gender,
            employeeId,
            department,
            workingHours,
            monthlySalary
        );

        if(
            specialization.trim() === "" ||
            consultationFee < 0 ||
            patientCount < 0 ||
            !Number.isInteger(patientCount)
        )
        {
            throw new Error("Invalid doctor details.");
        }
         this.specialization = specialization;
        this.consultationFee = consultationFee;
        this.patientCount = patientCount;
    }
    // Calculate consultation earnings
    calculateConsultationEarnings(): number {
        return this.consultationFee * this.patientCount;
    }

    // Override parent method
    override displayInfo(): void {
        super.displayInfo();

        console.log("Specialization:", this.specialization);
        console.log("Consultation Fee: ₹" + this.consultationFee);
        console.log("Patients Consulted:", this.patientCount);
        console.log(
            "Consultation Earnings: ₹" +
            this.calculateConsultationEarnings()
        );
    }
}


// Create Doctor object
const doctor = new Doctor(
    "Pavithra",
    24,
    "Female",
    101,
    "Cardiology",
    8,
    80000,
    "Heart Specialist",
    500,
    40
);

// Display details
console.log("===== DOCTOR DETAILS =====");
doctor.displayInfo();