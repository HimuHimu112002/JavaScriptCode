// next abar dekhte hobe most impotant 
let arry = [5, 55, 10, 1, 20, 6, 15];
arry.sort(function(a,b){
    return a-b;
})
// arrow function and assending order
// console.log(arry.sort((a,b)=> a-b));

// arrow function and dessending order
// console.log(arry.sort((a,b)=> b-a));

// arrow function and random
// console.log(arry.sort((a,b)=> .5 - Math.random()));

// console.log(Math.max(1,1,3));
// console.log(Math.min(1,1,3));

// check multiple number max and min.
// console.log(Math.max.apply(null,arry));