/*//Basic Generic 
function getValue<R>(value:R):R{
    return value;
}

let studentName = getValue<string>("Pavithra");
let studentMark = getValue<number>(90);
let studentStatus = getValue<boolean>(true);

console.log(studentName);
console.log(studentMark);
console.log(studentStatus);*/


//Intersection and Discriminated Unions

type Student = {
    id: number;
    name: string;
};

type StudentMarks = {
    id: number;
    name: string;
    semester: number;
    marks: number;
};

// Generic function: returns the same type it receives
function updateStudent<T>(student: T): T {
    return student;
}

// Existing student registration
let student: Student = {
    id: 101,
    name: "Pavithra"
};

console.log("Registered Student:");
console.log(student);

// After first semester
let firstSemester = updateStudent<StudentMarks>({
    ...student,
    semester: 1,
    marks: 85
});

console.log("First Semester:");
console.log(firstSemester);

// After second semester - update marks
let secondSemester = updateStudent<StudentMarks>({
    ...firstSemester,
    semester: 2,
    marks: 92
});

console.log("Second Semester:");
console.log(secondSemester);
