function analyzePrimes() : void{
    let start : number = Number ((document.getElementById("startNumber") as HTMLInputElement).value);
    let end: number = Number((document.getElementById("endNumber") as HTMLInputElement).value);    
    let primes : number[] =[];
    let count : number = 0;
    let sum: number = 0;
    let largest: number = 0;
    let smallest: number = 0;

    //CHECK EVERY NUMBER IN THE GIVEN RANGE
    for(let number = start; number<=end; number++){
        let isPrime: boolean = true;

        // 0 and 1 are not prime
        if (number < 2) {
            isPrime = false;
        }

        // Check whether the number is divisible
        for (let i = 2; i < number; i++) {

            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }

        // If prime
        if (isPrime) {

            primes.push(number);

            count++;

            //SUM 
            sum += number;

            if(smallest === 0){
                smallest = number;
            }

            if(number>largest){
                largest = number ;
            }

        }

    }

    let result = document.getElementById("result") as HTMLDivElement;

    if(count === 0){
        result.innerHTML = `<p> NO prime number found.</p>`
    } else {
        result.innerHTML =`
        <h3> Primes : </h3>
        <p>${primes.join(" ")}</p>
        <p><b>Count : </b> ${count}</p>
        <p><b>Sum : </b> ${sum}</p>
        <p><b>Largest : </b>${largest}</p>
        <p><b>Smallest : </b>${smallest}</p>`
    }
}