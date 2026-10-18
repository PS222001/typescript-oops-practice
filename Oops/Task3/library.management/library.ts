/*### Task 13 – Library Management (Static Properties & Static Methods)

Build a library management system.

- Create a `Book` class with book ID, title, and availability.
- Use a static property to track total books created.
- Use static methods to generate unique book IDs.
- Allow members to borrow and return books.
- Restrict members to a maximum of three active loans.
- Calculate late-return penalties.
- Use static methods to generate library-wide statistics. */
class Book {
    // Static property: shared by all Book objects
    static totalBooks: number = 0;

    // Book details
    public bookId: number;
    public isAvailable: boolean = true;

    constructor(
        public title: string
    ) {
        // Generate a unique ID
        this.bookId = Book.generateBookId();

        // Increase total books created
        Book.totalBooks++;
    }

    // Static method: generates unique book IDs
    static generateBookId(): number {
        return Book.totalBooks + 1;
    }

    displayBook(): void {
        console.log(
            `ID: ${this.bookId} | Title: ${this.title} | ` +
            `Available: ${this.isAvailable ? "Yes" : "No"}`
        );
    }
}

class Member {
    // Store the books borrowed by this member
    private borrowedBooks: {
        book: Book;
        borrowDate: Date;
    }[] = [];

    constructor(
        public memberId: number,
        public name: string
    ) {}

    // Borrow a book
    borrowBook(book: Book): void {
        if (!book.isAvailable) {
            console.log(`${book.title} is not available.`);
            return;
        }

        if (this.borrowedBooks.length >= 3) {
            console.log(
                `${this.name} cannot borrow more than 3 books.`
            );
            return;
        }

        book.isAvailable = false;

        this.borrowedBooks.push({
            book: book,
            borrowDate: new Date()
        });

        console.log(`${this.name} borrowed "${book.title}".`);
    }

    // Return a book and calculate any late penalty
    returnBook(book: Book, daysBorrowed: number): void {
        const index = this.borrowedBooks.findIndex(
            item => item.book === book
        );

        if (index === -1) {
            console.log(
                `${this.name} has not borrowed "${book.title}".`
            );
            return;
        }

        const allowedDays = 14;
        const penaltyPerDay = 5;

        let penalty = 0;

        if (daysBorrowed > allowedDays) {
            penalty = (daysBorrowed - allowedDays) * penaltyPerDay;
        }

        // Make book available again
        book.isAvailable = true;

        // Remove book from member's active loans
        this.borrowedBooks.splice(index, 1);

        console.log(`${this.name} returned "${book.title}".`);
        console.log(`Late penalty: ₹${penalty}`);
    }

    // Number of books currently borrowed by this member
    getActiveLoans(): number {
        return this.borrowedBooks.length;
    }
}

class Library {
    // Static method: library-wide statistics
    static displayStatistics(): void {
        console.log("\n--- Library Statistics ---");
        console.log(`Total books created: ${Book.totalBooks}`);
    }
}

// ---------------- MAIN PROGRAM ----------------

// Create books
const book1 = new Book("Java Programming");
const book2 = new Book("TypeScript Basics");
const book3 = new Book("Spring Boot");
const book4 = new Book("Angular Guide");

// Display books
console.log("--- Available Books ---");
book1.displayBook();
book2.displayBook();
book3.displayBook();
book4.displayBook();

// Create a member
const member1 = new Member(101, "Pavithra");

// Borrow books
console.log("\n--- Borrow Books ---");
member1.borrowBook(book1);
member1.borrowBook(book2);
member1.borrowBook(book3);
member1.borrowBook(book4); // Rejected: maximum 3 loans

console.log(
    `Active loans: ${member1.getActiveLoans()}`
);

// Return a book after 17 days
console.log("\n--- Return Book ---");
member1.returnBook(book1, 17);

// Try borrowing the fourth book again
console.log("\n--- Borrow After Return ---");
member1.borrowBook(book4);

// Display library statistics
Library.displayStatistics();

// Display final book availability
console.log("\n--- Final Book Status ---");
book1.displayBook();
book2.displayBook();
book3.displayBook();
book4.displayBook();