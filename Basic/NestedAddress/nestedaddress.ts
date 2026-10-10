/*type Person = {
    name: string;
    age: number;
    address: {
        city: string;
        pincode: number;
    };
};

let person1: Person = {
    name: "Pavithra",
    age: 25,
    address: {
        city: "Chennai",
        pincode: 600001
    }
};

console.log("Name : "+ person1.name);
console.log("Age : " +person1.age);
console.log("Address : "+ person1.address.city);
console.log("Pincode : "+person1.address.pincode);*/


//task13 = company nested 
type Company = {
    name: string;
    employeeCount: number;
    location: {
        city: string;
        country: string;
    };
};

let company1: Company = {
    name: "TCS",
    employeeCount: 5000,
    location: {
        city: "Chennai",
        country: "India"
    }
};

console.log(company1);

