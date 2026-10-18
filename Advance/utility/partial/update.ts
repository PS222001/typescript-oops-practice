type Students = {
    id: number;
    name: string;
    marks: number;
};

type StudentUpdate = Partial<Students>;

let update: StudentUpdate = {
    marks: 450
};

console.log(update);