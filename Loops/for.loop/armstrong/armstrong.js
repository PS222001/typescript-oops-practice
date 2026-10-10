"use strict";
function findArmstrong() {
    let start = Number(document.getElementById("startNumber").value);
    let end = Number(document.getElementById("endNumber").value);
    let armstrongNumbers = [];
    let count = 0;
    for (let number = start; number <= end; number++) {
        let original = number;
        let temp = number;
        let digits = 0;
        let sum = 0;
        // Count number of digits
        while (temp > 0) {
            digits++;
            temp = Math.floor(temp / 10); //remove last digit
        }
        temp = number;
        //Calculate Armstrong sum 
        while (temp > 0) {
            let digit = temp % 10;
            sum = sum + Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }
        //Check Armstrong number
        if (sum === original) {
            armstrongNumbers.push(number);
            count++;
        }
    }
    let result = document.getElementById("result");
    if (count === 0) {
        result.innerHTML = `
            <p>No Armstrong numbers found.</p>
        `;
    }
    else {
        result.innerHTML = `
            <h3>Armstrong Numbers:</h3>
            <p>${armstrongNumbers.join("<br>")}</p>

            <p><b>Total Count:</b> ${count}</p>
        `;
    }
}
