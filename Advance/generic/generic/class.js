"use strict";
class StorageBox {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
// Store a student name
let nameBox = new StorageBox("Pavithra");
// Store student marks
let marksBox = new StorageBox(450);
console.log(nameBox.getValue());
console.log(marksBox.getValue());
