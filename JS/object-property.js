const car = {
    name: "Himu",
    age: 21

    // name, age aguli ke property bole 
}
car.color = "red"
//console.log(car.color)

// property arry syntex diye print kora jai
//console.log(car['age'])

// let a = 'age';
// jodi kno property variable name er majhe store kora thake tahole arry syntex er 
// moto kore likhte hobe
// console.log(car[a])

// delete car.color
let val = '';
for (let item in car) {
    //console.log(item); jodi just property dekhte chai tahole item use korte hobe
    val += car[item];
}
console.log(val);