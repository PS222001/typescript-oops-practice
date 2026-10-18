function displayValue<T> (value : T):T{
    return value;
}
console.log(displayValue<string>("Pavithra"));
console.log(displayValue<number>(24));
console.log(displayValue<boolean>(true));



