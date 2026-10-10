class Student {
    private name: string;

    private mark1: number = 0;
    private mark2: number = 0;
    private mark3: number = 0;
    private mark4: number = 0;
    private mark5: number = 0;

    constructor(name:string){
        this.name =name ;
    }

    //Getter and Setter for MARK1
    public getMark1():number{
        return this.mark1;
    }

    public setMark1(mark:number) : void{
        if(mark>=0 && mark <=100){
            this.mark1=mark;
        } else{
            throw new Error("Mark must be between 0 to 100.");
        }
    }

    //Getter and Setter for MARK2
    public getMark2():number{
        return this.mark2;
    }

    public setMark2(mark:number) : void{
        if(mark>=0 && mark <=100){
            this.mark2=mark;
        } else{
            throw new Error("Mark must be between 0 to 100.");
        }
    }

    //Getter and Setter for MARK3
    public getMark3():number{
        return this.mark3;
    }

    public setMark3(mark:number) : void{
        if(mark>=0 && mark <=100){
            this.mark3=mark;
        } else{
            throw new Error("Mark must be between 0 to 100.");
        }
    }

    //Getter and Setter for MARK4
    public getMark4():number{
        return this.mark4;
    }

    public setMark4(mark:number):void{
        if(mark>=0 && mark<=100){
             this.mark4=mark;
        } else{
            throw new Error("Mark must be between 0 to 100.");
        }
    }

    //Getter and Setter for MARK5
    public getMark5():number{
        return this.mark5;
    }

    public setMark5(mark:number):void{
        if(mark>=0 && mark<=100){
             this.mark5=mark;
        } else{
            throw new Error("Mark must be between 0 to 100.");
        }
    }

    //CALCULATE TOTAL
    public calculateTotal() : number {
        return (
            this.mark1 +
            this.mark2 +
            this.mark3 +
            this.mark4 +
            this.mark5
        );
    }

    //CALCULATE AVERAGE
    public calculateAverage():number{
        return this.calculateTotal()/5;
    }

    //CALCULATE GRADE
    public calculateGrade(): string {

        const average = this.calculateAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 75) {
            return "B";
        } else if (average >= 60) {
            return "C";
        } else if (average >= 50) {
            return "D";
        } else {
            return "F";
        }
    }

    // Calculate Result
    public calculateResult():string{
        if(
            this.mark1 >=35 &&
            this.mark2 >=35 &&
            this.mark3 >=35 &&
            this.mark4 >=35 &&
            this.mark5 >=35 
        ){
            return "PASS";
        }
        return "FAIL";
    }

    // Display Result
    public displayResult(): string {

        return `
            Student Name: ${this.name}<br>
            Mark 1: ${this.mark1}<br>
            Mark 2: ${this.mark2}<br>
            Mark 3: ${this.mark3}<br>
            Mark 4: ${this.mark4}<br>
            Mark 5: ${this.mark5}<br>
            Total: ${this.calculateTotal()}<br>
            Average: ${this.calculateAverage()}<br>
            Grade: ${this.calculateGrade()}<br>
            Result: ${this.calculateResult()}
        `;
    }
}

// Create Student
const student = new Student("Pavithra");


//SET MARKS (This handles the button click and gets all the input values.)
function calculateResult(): void{
    const mark1 = Number(
        (document.getElementById
            ("mark1") as HTMLInputElement).value
    );

    const mark2 = Number(
        (document.getElementById
            ("mark2") as HTMLInputElement).value
    );

    const mark3 = Number(
        (document.getElementById
            ("mark3") as HTMLInputElement).value
    );

    const mark4 = Number(
        (document.getElementById
            ("mark4") as HTMLInputElement).value
    );

    const mark5 = Number(
        (document.getElementById
            ("mark5") as HTMLInputElement).value
    );

    try{
        student.setMark1(mark1);
        student.setMark2(mark2);
        student.setMark3(mark3);
        student.setMark4(mark4);
        student.setMark5(mark5);

        const message = student.displayResult();

        // Console
        console.log(message.replace(/<br>/g, "\n"));

        // Browser
        document.getElementById("result")!.innerHTML = message;

    } catch (error) {

        document.getElementById("result")!.innerHTML =
            (error as Error).message;
    }
}