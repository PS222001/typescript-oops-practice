type Employee ={
    name: string;
    salary: number;
    department: string;
};

function getProperty<T , K  extends  keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const emp: Employee ={
name: "Pavithra",
    salary: 30000,
    department: "IT"
};

console.log(getProperty(emp,"name"));
console.log(getProperty(emp, "salary"));
console.log(getProperty(emp, "department"));
