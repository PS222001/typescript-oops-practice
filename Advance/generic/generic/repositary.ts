type Student = {
    id: number;
    name: string;
};

class Repository<T extends { id: number }> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
}

let students = new Repository<Student>();

students.add({ id: 101, name: "Pavithra" });
students.add({ id: 102, name: "Priya" });

console.log(students.getAll());
console.log(students.findById(101));
