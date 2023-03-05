let a = [1,3, 4,5,6,7,78];
// console.log(a.toString());
// console.log(a.join(" = "));
// a.pop();
// console.log(a);
// a.push(200)
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift(100);
// console.log(a);
// console.log(a[2]);
// console.log(a.length);
// delete a[2];
// console.log(a);
// a.splice(3,2,300,400);
// console.log(a)
// a.splice(1,3,100);
// console.log(a)
// let r = a.slice(3,5);
// console.log(r)
// console.log(a.concat(100,200,300))

// let result = a.filter(function(currentValue){
//     return currentValue > 4 
    
// })

// let result = a.reduce((currentValue, nextValue)=>currentValue + nextValue)
// console.log(result)

// let result = a.map((currentValue)=>currentValue + 4)
// console.log(result)

let result = a.find((currentValue)=>currentValue > 4)
console.log(result)