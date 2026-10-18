function getFirst<T>(values:T[]) : T{
    return values[0];
}

//Array of names
let names :string[]=["Nila", "Priya", "Divya"];
console.log("First element in an String array : "+getFirst<string>(names));

//number
let numbers: number[] = [100, 200, 300];
console.log("First element in an array number : "+getFirst<number>(numbers));

