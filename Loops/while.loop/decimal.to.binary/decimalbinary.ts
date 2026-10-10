import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a decimal number : ",(answer:string) =>
{
    let decimal : number = Number(answer);
    let number : number = decimal;
    let binary : string ="";
    let ones : number =0;
    let zeros: number = 0;

    // Special case for 0
    if (number === 0) {
        binary = "0";
        zeros = 1;
    } else {

        while (number > 0) {

            let remainder: number = number % 2;

            if (remainder === 1) {
                binary = "1" + binary;
                ones++;
            } else {
                binary = "0" + binary;
                zeros++;
            }

            number = Math.floor(number / 2);
        }
    }

    console.log("Decimal:", decimal);
    console.log("Binary:", binary);
    console.log("Number of 1s:", ones);
    console.log("Number of 0s:", zeros);

    rl.close();
});