const val = "Bangladesh is my country Bangladesh Bangladesh Bangladesh";
const result = val.match(/m/gi);
console.log(result);

const count = result ? result.length : "This name are not include your sentance"
console.log(count)

const result1 = val.match(/m/i);
console.log(result1)