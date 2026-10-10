function getNumber(): number {
    return Number(
        (document.getElementById("number") as HTMLInputElement).value
    );
}


// 1. Prime
function checkPrime(): void {

    let number = getNumber();
    let prime = true;

    if (number < 2) {
        prime = false;
    }

    for (let i = 2; i < number; i++) {

        if (number % i === 0) {
            prime = false;
            break;
        }
    }

    document.getElementById("result")!.innerHTML =
        prime ? `${number} is Prime` : `${number} is Not Prime`;
}


// 2. Palindrome
function checkPalindrome(): void {

    let number = getNumber();
    let original = number;
    let reverse = 0;

    do {

        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);

    } while (number > 0);

    document.getElementById("result")!.innerHTML =
        original === reverse
            ? `${original} is Palindrome`
            : `${original} is Not Palindrome`;
}


// 3. Armstrong
function checkArmstrong(): void {

    let number = getNumber();
    let original = number;
    let sum = 0;

    do {

        let digit = number % 10;
        sum = sum + digit * digit * digit;
        number = Math.floor(number / 10);

    } while (number > 0);

    document.getElementById("result")!.innerHTML =
        original === sum
            ? `${original} is Armstrong`
            : `${original} is Not Armstrong`;
}


// 4. Reverse
function reverseNumber(): void {

    let number = getNumber();
    let reverse = 0;

    do {

        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);

    } while (number > 0);

    document.getElementById("result")!.innerHTML =
        `Reverse = ${reverse}`;
}


// 5. Sum of digits
function sumOfDigits(): void {

    let number = getNumber();
    let sum = 0;

    do {

        let digit = number % 10;
        sum = sum + digit;
        number = Math.floor(number / 10);

    } while (number > 0);

    document.getElementById("result")!.innerHTML =
        `Sum of Digits = ${sum}`;
}


// 6. Exit
function exitProgram(): void {

    document.getElementById("result")!.innerHTML =
        "Program Exited";
}