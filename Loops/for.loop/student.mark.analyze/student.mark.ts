function createMarkInputs(): void {

    let studentCount: number = Number(
        (document.getElementById("studentCount") as HTMLInputElement).value
    );

    let marksInput = document.getElementById("marksInput") as HTMLDivElement;

    let output: string = "";

    for (let student = 1; student <= studentCount; student++) {

        output += `<h3>Student ${student}</h3>`;

        for (let subject = 1; subject <= 5; subject++) {

            output += `
                <label>Subject ${subject}:</label>
                <input type="number" id="student${student}subject${subject}"
                       min="0" max="100">
                <br><br>
            `;
        }
    }

    marksInput.innerHTML = output;
}


function analyzeStudents(): void {

    let studentCount: number = Number(
        (document.getElementById("studentCount") as HTMLInputElement).value
    );

    let classTotal: number = 0;
    let highestTotal: number = -1;
    let lowestTotal: number = Infinity;

    let passedStudents: number = 0;
    let failedStudents: number = 0;

    let topper: number = 0;

    let output: string = "";

    // Loop through each student
    for (let student = 1; student <= studentCount; student++) {

        let total: number = 0;

        // Read 5 subject marks
        for (let subject = 1; subject <= 5; subject++) {

            let input = document.getElementById(
                `student${student}subject${subject}`
            ) as HTMLInputElement;

            let mark: number = Number(input.value);

            total = total + mark;
        }

        let average: number = total / 5;

        let grade: string;

        // Calculate grade
        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else if (average >= 60) {
            grade = "D";
        } else if (average >= 50) {
            grade = "E";
        } else {
            grade = "F";
        }

        classTotal = classTotal + total;

        // Find highest total
        if (total > highestTotal) {
            highestTotal = total;
            topper = student;
        }

        // Find lowest total
        if (total < lowestTotal) {
            lowestTotal = total;
        }

        // Pass / Fail
        if (average >= 50) {
            passedStudents++;
        } else {
            failedStudents++;
        }

        output += `
            <h3>Student ${student}</h3>
            Total: ${total}<br>
            Average: ${average.toFixed(2)}<br>
            Grade: ${grade}<br>
        `;
    }

    let classAverage: number = classTotal / studentCount;

    output += `
        <hr>
        <h2>Class Summary</h2>

        Class Average: ${classAverage.toFixed(2)}<br>
        Highest Total: ${highestTotal}<br>
        Lowest Total: ${lowestTotal}<br>
        Students Passed: ${passedStudents}<br>
        Students Failed: ${failedStudents}<br>
        Topper: Student ${topper}<br>
    `;

    document.getElementById("result")!.innerHTML = output;
}