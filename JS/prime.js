function prime(value) {
    for (let i = 2; i < value - 1; i++) {
        if(value % i == 0){
            return "This is not a prime number";
        }
    }
    return "This is prime number";
    
}

let result = prime(7);
console.log(result);