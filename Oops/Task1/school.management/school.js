"use strict";
class Person {
    // Encapsulation
    name;
    age;
    // Static school information
    static schoolName = "ABC Higher Secondary School";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `
            Name: ${this.name}<br>
            Age: ${this.age}
        `;
    }
}
// Student inherits Person
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    // Overriding
    displayInfo() {
        return `
            Role: Student<br>
            Grade: ${this.grade}
        `;
    }
}
// Teacher inherits Person
class Teacher extends Person {
    subject;
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    // Overriding
    displayInfo() {
        return `
            Role: Teacher<br>
            Subject: ${this.subject}
        `;
    }
}
// ClassTeacher inherits Teacher
class ClassTeacher extends Teacher {
    className;
    constructor(name, age, subject, className) {
        super(name, age, subject);
        this.className = className;
    }
    // Overriding
    displayInfo() {
        return `
            Role: Class Teacher<br>
            Class: ${this.className}<br>
            Subject: ${this.getSubject()}
        `;
    }
    // Getter for subject
    getSubject() {
        return "Mathematics";
    }
}
function displayPerson() {
    const name = document.getElementById("name").value;
    const age = Number(document.getElementById("age").value);
    const role = document.getElementById("role").value;
    let person;
    if (role === "Student") {
        const grade = document.getElementById("grade").value;
        person = new Student(name, age, grade);
    }
    else if (role === "Teacher") {
        const subject = document.getElementById("subject").value;
        person = new Teacher(name, age, subject);
    }
    else {
        const subject = document.getElementById("subject").value;
        const className = document.getElementById("className").value;
        person = new ClassTeacher(name, age, subject, className);
    }
    const message = `School: ${Person.schoolName}<br>
         ${person.displayInfo()}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
