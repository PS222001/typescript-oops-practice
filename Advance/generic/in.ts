
type UG = {
    username: string;
    coursename: string;
};

type PG = {
    username: string;
    researchTopic: string;
};

function displayStudent(student: UG | PG): void {
    if ("coursename" in student) {
        console.log("UG Students:", student.username);
        console.log("Course:", student.coursename);
    } else {
        console.log("PG Students:", student.username);
        console.log("Research:", student.researchTopic);
    }
}

displayStudent({ username: "Rihana", coursename: "BCA" });
displayStudent({ username: "Pavithra", researchTopic: "AI" });
