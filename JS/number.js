let a = 10;
let b = 20;
console.log(a + b + "Hello") // 30Hello
console.log("Hello" + (a + b)) // Hello30
console.log("Hello" + a + b) // Hello1020 add hobena karon
//first string thakle pore kono bracket na thkele + korle 
//ta string hobe.

console.log("Hello" + a - b) // Add bade sob kisu NaN asbe karon
// - korar pore ta string er sathe concat hote parbena.

let c = "100";
let d = "20";
console.log(c + d)// dutai string hole all math calculate
//korte parbe ake numeric bole just add korte parbena.

let c1 = "a100";
let d1 = 20;
console.log(isNaN(c1)) // true
console.log(isNaN(d1)) // fase
//"10" ake neumeric bole ata auto number hisabe count korbe
//but er majhe akt char thaklei ta string hoiye jabe.

console.log(typeof(NaN)); // Number

let x = new Number(123);
console.log(x) //Object
