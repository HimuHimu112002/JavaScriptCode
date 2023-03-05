function prime(value) {
    if (value == 0) {
        return "0 is not accept"
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${value} * ${i} = ${value * i}`)
    }
    return "This is prime number";
    
}

let result = prime(5);
console.log(result);