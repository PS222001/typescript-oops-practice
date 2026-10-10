class Person {

    // Encapsulation
    private name: string;
    private age: number;

    // Static school information
    public static readonly schoolName: string = "ABC Higher Secondary School";

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo(): string {
        return `
            Name: ${this.name}<br>
            Age: ${this.age}
        `;
    }
}


// Student inherits Person
class Student extends Person {

    private grade: string;

    constructor(
        name: string,
        age: number,
        grade: string
    ) {
        super(name, age);
        this.grade = grade;
    }

    // Overriding
    public displayInfo(): string {
        return `
            Role: Student<br>
            Grade: ${this.grade}
        `;
    }
}


// Teacher inherits Person
class Teacher extends Person {

    private subject: string;

    constructor(
        name: string,
        age: number,
        subject: string
    ) {
        super(name, age);
        this.subject = subject;
    }

    // Overriding
    public displayInfo(): string {
        return `
            Role: Teacher<br>
            Subject: ${this.subject}
        `;
    }
}


// ClassTeacher inherits Teacher
class ClassTeacher extends Teacher {

    private className: string;

    constructor(
        name: string,
        age: number,
        subject: string,
        className: string
    ) {
        super(name, age, subject);
        this.className = className;
    }

    // Overriding
    public displayInfo(): string {
        return `
            Role: Class Teacher<br>
            Class: ${this.className}<br>
            Subject: ${this.getSubject()}
        `;
    }

    // Getter for subject
    private getSubject(): string {
        return "Mathematics";
    }
}


function displayPerson(): void {

    const name = (
        document.getElementById("name") as HTMLInputElement
    ).value;

    const age = Number(
        (document.getElementById("age") as HTMLInputElement).value
    );

    const role = (
        document.getElementById("role") as HTMLSelectElement
    ).value;


    let person: Person;


    if (role === "Student") {

        const grade = (
            document.getElementById("grade") as HTMLInputElement
        ).value;

        person = new Student(name, age, grade);

    }
    else if (role === "Teacher") {

        const subject = (
            document.getElementById("subject") as HTMLInputElement
        ).value;

        person = new Teacher(name, age, subject);

    }
    else {

        const subject = (
            document.getElementById("subject") as HTMLInputElement
        ).value;

        const className = (
            document.getElementById("className") as HTMLInputElement
        ).value;

        person = new ClassTeacher(
            name,
            age,
            subject,
            className
        );
    }


    const message =
        `School: ${Person.schoolName}<br>
         ${person.displayInfo()}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}