"use strict";
class LibraryItem {
    title;
    lateDays;
    constructor(title, lateDays) {
        this.title = title;
        this.lateDays = lateDays;
    }
}
// Book
class Books extends LibraryItem {
    calculateFine() {
        return this.lateDays * 10;
    }
}
// Magazine
class Magazine extends LibraryItem {
    calculateFine() {
        return this.lateDays * 5;
    }
}
// DVD
class DVD extends LibraryItem {
    calculateFine() {
        return this.lateDays * 20;
    }
}
// Runtime Polymorphism
function calculateLibraryFine() {
    const title = document.getElementById("title").value;
    const lateDays = Number(document.getElementById("lateDays").value);
    const itemType = document.getElementById("itemType").value;
    let item;
    if (itemType === "Books") {
        item = new Books(title, lateDays);
    }
    else if (itemType === "Magazine") {
        item = new Magazine(title, lateDays);
    }
    else {
        item = new DVD(title, lateDays);
    }
    const fine = item.calculateFine();
    const message = `Item Type: ${itemType}<br>
         Title: ${title}<br>
         Late Days: ${lateDays}<br>
         Late Fine: ₹${fine}`;
    console.log(message.replace(/<br>/g, "\n"));
    document.getElementById("result").innerHTML = message;
}
