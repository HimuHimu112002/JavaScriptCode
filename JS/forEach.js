let arry = [1,2,3,4,5,6,6,7];
function ForEachCall(value, index, array) {
    // console.log(value)
    // console.log(index)
    // console.log(array)
    return value 
}
// arry.forEach(ForEachCall);

// function mapCall(value) {
//     return value > 4;
// }
// let newNumber = arry.map(mapCall);
// console.log(newNumber);

// let newNumber = arry.filter(mapCall);
// console.log(newNumber);

// function ForEachCall(total,value) { 
//     return total + value;
// }
// let newNumber = arry.reduce(ForEachCall); // count the total number the array
// console.log(newNumber);

// function ForEachCall(value) { 
//     return value < 10;
// }
// let newNumber = arry.some(ForEachCall); // some check korbe akti value condition match
                                           // korlei true dekhabe.
console.log(arry.forEach(ForEachCall));