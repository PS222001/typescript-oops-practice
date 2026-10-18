
type CollegeStudent = {
    id: number;
    name: string;
    marks: number;
};

type StudentDetails = Readonly<CollegeStudent>;

let s: StudentDetails = {
    id: 101,
    name: "Pavithra",
    marks: 450
};

console.log(s);

 //s.marks = 480;
