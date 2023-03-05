function rest() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}
//rest(10,20,1,2,3,4,5,6,7)
// arguments arrow function er majhe kaj korena
let arr = () => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    console.log(sum);
}
// arr(10,20,1,2,3,4,5,6,7)
// Rest parameters using normal function
function rest(...value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum = sum + value[i];
    }
    console.log(sum);
}
//rest(10,20,1,2,3,4,5,6,7,100)

// Rest parameters using arrow function
let a = (...value) =>{
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum = sum + value[i];
    }
    console.log(sum);
}
a(10,20,30)
