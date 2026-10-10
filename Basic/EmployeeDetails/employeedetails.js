"use strict";
const employee1 = {
    id: 101,
    name: "Pavithra",
    salary: 45000,
    department: "IT"
};
const employee2 = {
    id: 102,
    name: "Rahul",
    salary: 50000,
    department: "HR"
};
//console.log(employee1);
//console.log(employee2);
document.getElementById("result").innerHTML =
    `Employee 1: ${employee1.name}<br>
     Salary: ${employee1.salary}<br>
     Department: ${employee1.department}<br><br>

     Employee 2: ${employee2.name}<br>
     Salary: ${employee2.salary}<br>
     Department: ${employee2.department}`;
