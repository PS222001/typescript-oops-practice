
class Doctor {
    treat(): void {
        console.log("Doctor is treating a patient");
    }
}

class Nurse {
    assist(): void {
        console.log("Nurse is assisting the doctor");
    }
}

function hospitalWork(person: Doctor | Nurse): void {
    if (person instanceof Doctor) {
        person.treat();
    } else {
        person.assist();
    }
}

hospitalWork(new Doctor());
hospitalWork(new Nurse());
