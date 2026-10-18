//Commom properties use to find object Type ->Descrminated unions
type UGStudent = {
    studentType: "UG";
    id: number;
    name: string;
    course: string;
};

type PGStudent = {
    studentType: "PG";
    id: number;
    name: string;
    researchTopic: string;
};

// Union of two student types
type Student = UGStudent | PGStudent;

function displayStudent(student: Student): void {

    console.log("ID: " + student.id);
    console.log("Name: " + student.name);

    // Identify the object type using a common property
    if (student.studentType === "UG") {
        console.log("Course: " + student.course);
    } else {
        console.log("Research Topic: " + student.researchTopic);
    }
}

displayStudent({
    studentType: "UG",
    id: 101,
    name: "Pavithra",
    course: "B.Sc Computer Science"
});

displayStudent({
    studentType: "PG",
    id: 201,
    name: "Priya",
    researchTopic: "Artificial Intelligence"
});
