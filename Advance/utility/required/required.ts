
type StudentMark = {
    id: number;
    name: string;
    marks?: number;
    department?: string;
};

type CompleteStudent = Required<StudentMark>;

let stud: CompleteStudent = {
    id: 101,
    name: "Pavithra",
    marks: 450,
    department: "Computer Science"
};

console.log(stud);
