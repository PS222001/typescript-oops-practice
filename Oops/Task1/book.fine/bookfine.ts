abstract class LibraryItem {

    protected title: string;
    protected lateDays: number;

    constructor(title: string, lateDays: number) {
        this.title = title;
        this.lateDays = lateDays;
    }

    // Abstract method
    public abstract calculateFine(): number;
}


// Book
class Books extends LibraryItem {

    public calculateFine(): number {
        return this.lateDays * 10;
    }
}


// Magazine
class Magazine extends LibraryItem {

    public calculateFine(): number {
        return this.lateDays * 5;
    }
}


// DVD
class DVD extends LibraryItem {

    public calculateFine(): number {
        return this.lateDays * 20;
    }
}


// Runtime Polymorphism
function calculateLibraryFine(): void {

    const title = (
        document.getElementById("title") as HTMLInputElement
    ).value;

    const lateDays = Number(
        (document.getElementById("lateDays") as HTMLInputElement).value
    );

    const itemType = (
        document.getElementById("itemType") as HTMLSelectElement
    ).value;


    let item: LibraryItem;


    if (itemType === "Books") {

        item = new Books(title, lateDays);

    } else if (itemType === "Magazine") {

        item = new Magazine(title, lateDays);

    } else {

        item = new DVD(title, lateDays);
    }


    const fine = item.calculateFine();


    const message =
        `Item Type: ${itemType}<br>
         Title: ${title}<br>
         Late Days: ${lateDays}<br>
         Late Fine: ₹${fine}`;


    console.log(message.replace(/<br>/g, "\n"));

    document.getElementById("result")!.innerHTML = message;
}