/*type Mobile = {
    brand: string;
    model: string;
    price: number;
    features: string[];
};

let mobile1: Mobile = {
    brand: "Samsung",
    model: "Galaxy S25",
    price: 70000,
    features: ["5G", "AMOLED Display", "Fast Charging"]
};

console.log("Mobile Brand:"+mobile1.brand);
console.log("Mobile Model:"+mobile1.model);
console.log("Mobile Price:"+mobile1.price);
console.log("Mobile Features:"+mobile1.features);*/

//StudentArray
/*type Course = {
    id: number;
    name: string;
    duration: string;
    students: string[];
};

let course1: Course = {
    id: 1,
    name: "Angular",
    duration: "6 Months",
    students: ["Pavithra", "Anu", "Priya"]
};

console.log("Course ID: " + course1.id );
console.log("Course Name: " + course1.name );
console.log("Duration: " + course1.duration  );
console.log("Students: " + course1.students );*/



//Task 16 – Order with Items Array
type Order = {
    orderId: number;
    customerName: string;
    amount: number;
    items: string[];
};

let order1: Order = {
    orderId: 1001,
    customerName: "Pavithra",
    amount: 2500,
    items: ["Laptop Bag", "Mouse", "Keyboard"]
};

console.log("Order ID: " + order1.orderId);
console.log("Customer Name: " + order1.customerName);
console.log("Amount: ₹" + order1.amount );
console.log("Items: " + order1.items);


