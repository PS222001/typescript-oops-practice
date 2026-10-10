type Payment = {
    id: number;
    amount: number;
    status: "paid" | "pending" | "failed";
};

let payment1: Payment = {
    id: 101,
    amount: 5000,
    status: "paid"
};

let payment2: Payment = {
    id: 102,
    amount: 3000,
    status: "pending"
};

console.log(payment1);
console.log(payment2);

