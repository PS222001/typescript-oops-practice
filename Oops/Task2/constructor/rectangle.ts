class Rectangle{
    length:number;
    width:number;

    constructor(length:number,width:number){
        this.length=length;
        this.width=width;
    }

    calculateArea():void{
        let area = this.length*this.width;
        console.log("Length:", this.length);
        console.log("Width:", this.width);
        console.log("Area:", area);
    }
}

//Create Rectangle
let rectangle = new Rectangle(10,5);

// Calculate and display area
rectangle.calculateArea();