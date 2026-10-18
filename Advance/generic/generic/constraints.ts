function getLength<T extends {length:number}> (value: T):number{
    return value.length;
}

//Using String
console.log("Length of the String :", getLength("Pavithra"));

//Using Array
console.log("Length of Array :", getLength([10,20,30]));

