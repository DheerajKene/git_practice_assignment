function prm_or_not(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {                 
            return "The number is not a prime number";
        }
    }
    return "The number is a prime number";
}

let x = 13; // Replace 13 with the number you want to check
let ans = prm_or_not(x);
console.log(ans);