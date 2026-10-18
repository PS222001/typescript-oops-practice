class Developer{
    writecode():void{
        console.log("Developer is writing code");
    }
}

class Manager{
    coductMeeting():void{
        console.log("Manger is copnducting meeting");
    }
}

function performWork(employee:Developer|Manager):void{
    if(employee instanceof Developer){
        employee.writecode()
    }
    if(employee instanceof Manager){
        employee.coductMeeting();
    }
}

performWork(new Developer());
performWork(new Manager());