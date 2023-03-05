const myOb = {
    name: "Himu",
    car:[
        {name:"food", age:['21']},
    ]
}

// let result = myOb.car.age
// console.log(result)

let x = '';
for (const item in myOb.car) {
    x += myOb.car[item].name
    // object er vitore array acess
}
console.log(x)

let y = '';
for (const item in myOb.car) {
    y += myOb.car[item].name // object er vitore array acess
    for (const j in myOb.car[item].age) {
        y += myOb.car[item].age[j]
        // object er vitore array then object then er vitore abar arry access
    }
    
}
console.log(y)