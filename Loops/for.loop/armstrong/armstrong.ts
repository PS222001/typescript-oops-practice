function findArmstrong(): void {
    let start: number = Number(
        (document.getElementById("startNumber") as HTMLInputElement).value
    );

    let end: number = Number(
        (document.getElementById("endNumber") as HTMLInputElement).value
    );

    let armstrongNumbers : number[] =[];
    let count : number =0;

    for (let number = start ; number <=end ; number++){
        let original: number = number;
        let temp: number = number;
        let digits: number = 0;
        let sum: number = 0;

        // Count number of digits
        while (temp > 0) {
            digits++;
            temp = Math.floor(temp / 10); //remove last digit
        }

        temp = number;

        //Calculate Armstrong sum 
        while(temp>0){
            let digit : number = temp%10;
            sum = sum + Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        //Check Armstrong number
        if(sum === original){
            armstrongNumbers.push(number);
            count++;
        }
    }
    let result = document.getElementById("result") as HTMLDivElement;
    if (count === 0) {

        result.innerHTML = `
            <p>No Armstrong numbers found.</p>
        `;

    } else {

        result.innerHTML = `
            <h3>Armstrong Numbers:</h3>
            <p>${armstrongNumbers.join("<br>")}</p>

            <p><b>Total Count:</b> ${count}</p>
        `;
    }
}