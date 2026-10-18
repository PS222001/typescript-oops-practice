
type StudentData = {
    id: number;
    name: string;
    marks: number;
    department: string;
};

// Exclude marks from Student
type StudentProfile = Omit<StudentData, "marks">;

let studentProfile: StudentProfile = {
    id: 101,
    name: "Pavithra",
    department: "Computer Science"
    //marks: 85;
};

console.log(studentProfile);
