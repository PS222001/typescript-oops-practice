function generateMatrix() : void {
    let n : number= Number((document.getElementById("number")as HTMLInputElement).value);

    let output : string = "";
    let total : number = 0;

    // Outer loop: multiplication table
    for (let i = 1; i <= n; i++) {

        // Inner loop: multiply with 1 to N
        for (let j = 1; j <= n; j++) {
            let value : number = i*j;
            output += `${i} x ${j} = ${value}<br>`;
            total = total + value;
        }
        output += "<br>";
    }
    output += `<b>Total of all values = ${total}</b>`;
    document.getElementById("result")!.innerHTML = output;
}