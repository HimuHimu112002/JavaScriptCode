let a = 123;
let a1 = a.toString();
console.log(a1); // Convert number to string

let b = 1.523;
let b1 = b.toExponential(2)
console.log(b1); // dot er pore amra je koti digit
// dekhte chai sei value ta dite hobe toExponential
// er majhe tahole dot er pore sei koti digit dekhabe

let c = 1.523;
let c1 = c.toFixed(0)
console.log(c1); // same toExponential er moto but (0)
// dile 1.5 ba er upore thakle ta purno digit asbe r 1.5
// er niche thakl 1 asbe baki all same toExponential

let d = 1.523;
let d1 = d.toPrecision(3)
console.log(d1); // same toExponential er moto
// but aktu change ase jemon toPrecision amra jei number
// dibo seta dot er age theke and dot er pore count hobe
// total number show korbe output asbe 1.52
console.log(parseInt("10 20 30"));
//parseInt avabe asbe but number avabe count korle asbena

console.log(parseInt("10.40"));
//parseInt avabe digit asbe but number floating digit asbe

console.log(parseInt("Himu 40"));
//parseInt avabe NaN 

console.log(parseFloat("Himu 40"));
//parseFloat avabe NaN 

console.log(parseFloat("40.30"));
//parseFloat 40.3 
console.log(Number.MAX_VALUE(20,30));
//parseFloat 40.3 