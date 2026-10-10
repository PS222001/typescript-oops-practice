type Book ={
    title: string;
    author: string;
    price: number;
    available: boolean;
};

const book1 : Book = {
    title: "Focus on what makes you happy",
    author: "Daurius Foroux",
    price: 100,
    available: true
};

const book2: Book = {
    title: "Win your Inner Battle",
    author: "Daurius Foroux",
    price: 150,
    available: false
};

console.log(book1);
console.log(book2);
