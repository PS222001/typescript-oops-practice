function analyzeNumber(): void {

    let number: number = 58385;

    let original: number = number;
    let reverse: number = 0;
    let count: number = 0;
    let sum: number = 0;
    let largest: number = 0;

    if (number === 0) {
        count = 1;
        largest = 0;
    } else {
        while (number > 0) {
            //GET LAST DIGIT FOR REVERSE A NUMBER
            let digit: number = number % 10;

            reverse = reverse * 10 + digit;
            sum = sum + digit;

            //STORE LARGEST NUMBER
            if (digit > largest) {
                largest = digit;
            }

            //COUNT DIGIT
            count++;

            //REMOVAL OF LAST DIGIT
            number = Math.floor(number / 10);
        }
    }
            //TO CHECK PALIDROME
            let palindrome: string;

            if (original === reverse) {
                palindrome = "Yes";
            } else {
                palindrome = "No";
            }

    console.log("Reverse:", reverse);
    console.log("Digits:", count);
    console.log("Sum:", sum);
    console.log("Largest:", largest);
    console.log("Palindrome:", palindrome);
}

analyzeNumber();