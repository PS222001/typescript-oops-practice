"use strict";
function generateMatrix() {
    let n = Number(document.getElementById("number").value);
    let output = "";
    let total = 0;
    // Outer loop: multiplication table
    for (let i = 1; i <= n; i++) {
        // Inner loop: multiply with 1 to N
        for (let j = 1; j <= n; j++) {
            let value = i * j;
            output += `${i} x ${j} = ${value}<br>`;
            total = total + value;
        }
        output += "<br>";
    }
    output += `<b>Total of all values = ${total}</b>`;
    document.getElementById("result").innerHTML = output;
}
