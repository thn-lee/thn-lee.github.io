let input
let prime = []
while (true) {
    input = prompt("Please enter the number");
    if (isNaN(input)) {
        alert("Plese enter a number.");
        console.log(input);
    } else if (input <= 0) {
        alert("please enter the number that value is > 0")
        console.log(input);
    } else {
        showPrimes(input);
        alert("For n = " + input + ", Prime numbers are " + prime);
        break;
    }
}

function showPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) continue;
        prime.push(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}