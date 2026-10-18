class StorageBox<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }
}

// Store a student name
let nameBox = new StorageBox<string>("Pavithra");

// Store student marks
let marksBox = new StorageBox<number>(450);

console.log(nameBox.getValue());
console.log(marksBox.getValue());
