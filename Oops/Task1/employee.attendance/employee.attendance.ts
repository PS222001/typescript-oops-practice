class Employee {

    // Private properties = Encapsulation
    private employeeId: number;
    private name: string;
    private totalWorkingDays: number;
    private presentDays: number;

    constructor(
        employeeId: number,
        name: string,
        totalWorkingDays: number,
        presentDays: number
    ) {
        this.employeeId = employeeId;
        this.name = name;
        this.totalWorkingDays = totalWorkingDays;
        this.presentDays = presentDays;
    }

    public calculateAttendance(): number {
        return (this.presentDays / this.totalWorkingDays) * 100;
    }

    public checkEligibility(): string {

        const attendance = this.calculateAttendance();

        if (attendance >= 75) {
            return "Eligible for Salary and Bonus";
        } else {
            return "Eligible for Salary but Not Eligible for Bonus";
        }
    }

    public displayDetails(): string {

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
function calculateAttendance(): void {

    const employeeId = Number(
        (document.getElementById("employeeId") as HTMLInputElement).value
    );

    const name = (
        document.getElementById("name") as HTMLInputElement
    ).value;

    const totalWorkingDays = Number(
        (document.getElementById("totalWorkingDays") as HTMLInputElement).value
    );

    const presentDays = Number(
        (document.getElementById("presentDays") as HTMLInputElement).value
    );


    const employee = new Employee(
        employeeId,
        name,
        totalWorkingDays,
        presentDays
    );

    const message = employee.displayDetails();

    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}