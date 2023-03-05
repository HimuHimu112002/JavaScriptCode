function common(num1) {
    if(num1 % 2 == 0){
        console.log(num1,"Even number");
    }else{
        console.log(num1,"odd number");
    }

}
function loopAse(a){
    for (let i = 0; i < a.length; i++) {
        const num = first[i];
        common(num);
    }
}

// uprer tar sort 

// function loopAse(a){
//     for (let i = 0; i < a.length; i++) {
//         const num = first[i];
//         if(num % 2 == 0){
//             console.log(num,"Even number");
//         }else{
//             console.log(num,"odd number");
//         }
//     }
// }

let first = [1,2,3,4,5,6];
loopAse(first);


