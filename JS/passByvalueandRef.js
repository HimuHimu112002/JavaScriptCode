let a = 10;
let b = a;
b = 100;
console.log(b);

let ob ={
    Age: 20
}
console.log(ob.Age); // outPut 20
let ob1 = ob;
ob1.Age = 25;
console.log(ob.Age); // outPut 25
console.log(ob1); // outPut 25

let x = 10;
let y = 10;
console.log(x == y); // TRUE

let ref1={
    age: 15,
}
let ref2={
    age: 25,
}
console.log(ref1 == ref2) // FALSE