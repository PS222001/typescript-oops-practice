interface User {
    id: number;
    name: string;
}

interface Course {
    id: number;
    title: string;
    instructorId: number;
}

interface Enrollment {
    studentId: number;
    courseId: number;
    completionPercentage: number;
}

// Instructor class
class Instructor implements User{
    constructor(public id: number, public name: string){}
    private courses : Course[] =[];


    //Create course
createCourse(courseId: number, title: string): Course {
        const course: Course = {
            id: courseId,
            title: title,
            instructorId: this.id
        };

        this.courses.push(course);
        console.log("Course created:", title);
        return course;
    }

    //Manage course
    manageCourse(courseId: number, newTitle:string):void{
        const course = this.courses.find(c=>c.id===courseId);
        if(course){
            course.title= newTitle;
            console.log("Course updated:", newTitle);
        } else {
            console.log("Course not found!");
        }
    }
}

//Student enrolls and tracks progress
class Student implements User{
    private enrollments: Enrollment[] = [];

    constructor(public id: number, public name: string) {}

    enroll(course:Course):void{
        const alreadyEnrolled = this.enrollments.some(e=>e.courseId===course.id);

        if (alreadyEnrolled) {
            console.log("Already enrolled:", course.title);
            return;
        }

        this.enrollments.push({
            studentId: this.id,
            courseId: course.id,
            completionPercentage: 0
        });

        console.log(this.name, "enrolled in", course.title);
    }

    //Update course completion
    updateCompletion(courseId: number, percentage: number): void {
        const enrollment = this.enrollments.find(
            e => e.courseId === courseId
        );

        if (!enrollment) {
            console.log("Enrollment not found!");
            return;
        }

        if (!Number.isFinite(percentage) ||
            percentage < 0 || percentage > 100) {
            console.log("Invalid completion percentage!");
            return;
        }

        //Enrollement completion percentage
        enrollment.completionPercentage = percentage;
        console.log("Completion:", percentage + "%");
    }
    generateCertificate(courseId: number): void {
        const enrollment = this.enrollments.find(
            e => e.courseId === courseId
        );

        if (!enrollment) {
            console.log("Enrollment not found!");
            return;
        }

        if (enrollment.completionPercentage === 100) {
            console.log("Certificate generated for", this.name);
        } else {
            console.log("Complete 100% first!");
        }
    }
}

// Create an instructor
const instructor = new Instructor(1, "Anu");

// Instructor creates two courses
const javaCourse = instructor.createCourse(101, "Java");
const angularCourse = instructor.createCourse(102, "Angular");

// Instructor updates a course
instructor.manageCourse(102, "Angular Basics");

// Create a student
const student = new Student(201, "Pavithra");

// Student enrolls in two courses
student.enroll(javaCourse);
student.enroll(angularCourse);

// Try duplicate enrollment
student.enroll(javaCourse);

// Update progress and request a certificate
student.updateCompletion(101, 75);
student.generateCertificate(101);

student.updateCompletion(101, 100);
student.generateCertificate(101);

