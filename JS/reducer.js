const getMax = (a, b) => Math.max(a, b);
const result = [1, 5, 7, 10, 0, 22, 37].reduce(getMax);
console.log(result);


const getMin = (a, b) => Math.min(a, b);
const resultMin = [1, 5, 7, 10, 0, 22, 37].reduce(getMin);
console.log(resultMin);

const resultAdd = [1, 5, 7, 10, 0, 22, 37]
let value = resultAdd.reduce((a, b)=>{
    return a + b;
},0)
console.log(value);