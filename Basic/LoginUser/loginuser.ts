type LoginUser = {
    username: string;
    password: string;
    isLoggedIn: boolean;
};

let user1: LoginUser = {
    username: "Pavithra",
    password: "pavi123",
    isLoggedIn: true
};

let user2: LoginUser = {
    username: "Anu",
    password: "anu123",
    isLoggedIn: false
};

console.log(user1);
console.log(user2);