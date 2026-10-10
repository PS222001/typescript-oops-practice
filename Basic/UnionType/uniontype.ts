//Double Usion types 
type Vehicle = {
    vehicleNumber: string | number;
    vehicleType: "car" | "bike" | "bus";
};

let vehicle1: Vehicle = {
    vehicleNumber: 12345,
    vehicleType: "car"
};

let vehicle2: Vehicle = {
    vehicleNumber: "TN01AB1234",
    vehicleType: "bike"
};

console.log(vehicle1);
console.log(vehicle2);



/*type User = {
    id: string | number;
    name: string;
};

let user1: User = {
    id: 101,
    name: "Pavithra"
};

let user2: User = {
    id: "USR102",
    name: "Anu"
};

console.log(user1);
console.log(user2);*/

/*document.getElementById("result")!.innerHTML =
    "User 1 ID: " + user1.id + "<br>" +
    "User 1 Name: " + user1.name + "<br><br>" +
    "User 2 ID: " + user2.id + "<br>" +
    "User 2 Name: " + user2.name;*/