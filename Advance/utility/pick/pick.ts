//Select specific properties

type Stud = {
    id: number;
    name: string;
    marks: number;
    department: string;
};

// Select only id and name
type StudentSummary = Pick<Stud, "id" | "name">;

let student: StudentSummary = {
    id: 101,
    name: "Pavithra"
};

console.log(student);
