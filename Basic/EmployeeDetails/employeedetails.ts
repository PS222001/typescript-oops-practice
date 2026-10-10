type Employee ={
    id: number;
    name: string;
    salary: number;
    department: string;
};

const employee1: Employee ={
    id: 101,
    name: "Pavithra",
    salary: 45000,
    department: "IT"
}

const employee2: Employee = {
    id: 102,
    name: "Rahul",
    salary: 50000,
    department: "HR"
};


//console.log(employee1);
//console.log(employee2);

document.getElementById("result")!.innerHTML=
`Employee 1: ${employee1.name}<br>
     Salary: ${employee1.salary}<br>
     Department: ${employee1.department}<br><br>

     Employee 2: ${employee2.name}<br>
     Salary: ${employee2.salary}<br>
     Department: ${employee2.department}`;