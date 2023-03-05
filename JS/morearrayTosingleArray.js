let a = [1,2,3,4,5,6,7,8,9];
let b = [11,22,33,44,55,66,77,88,99];
let c = [111,222,333,444,555,666,777,888,999];

let convert = [...a, ...b, ...c];
//console.log(convert);

console.log(Math.max.apply(null, c));
console.log(Math.max(...c));