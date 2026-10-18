//Using type of
 
type Employee = {
    name?: string;
    salary?: number;
};

function checkEmployee(employee: Employee): void {

    if (typeof employee.name === "undefined") {
        throw new Error("Employee name is missing");
    }

    if (typeof employee.salary === "undefined") {
        throw new Error("Employee salary is missing");
    }

    console.log("Employee name: " + employee.name);
    console.log("Employee salary: " + employee.salary);
}

// Test 1: Both properties exist
checkEmployee({
    name: "Priya",
    salary: 30000
});

// Test 2: Name is missing
try {
    checkEmployee({
        salary: 25000
    });
} catch (error) {
    console.log((error as Error).message+ " For Test 2.");
}


/*//Using hasown property
type Employee = {
    name:string;
    salary:number;
};
function checkProperty(employee: Employee): void {
    if(employee.hasOwnProperty("salary")){
         console.log("Salary property exists");
    } else {
        throw new Error("Salary property does not exist");
    }
}

// Test 1: Property exists
checkProperty({
    name:"Ramya" , salary:40000
});

// Test 2: Property does not exist
//checkProperty({ name:"Renu" });*/


//Using in property
/*type Employee = {
    name:string;
    salary:number;
};

function checkProperty(employee:Employee) : void{
    if("salary" in employee){
        console.log("Salary property exits");
    }else{
        throw new Error("Salary property does not exits");
    }
}
let emp={
    name:"pavithra",
    salary:40000
};
checkProperty(emp)*/