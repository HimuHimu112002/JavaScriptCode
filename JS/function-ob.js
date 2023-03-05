function a(e){
    e.one = 7;
    // oner er value update kora hoiyese
    return e.one + e.two;
}

let m ={
    one: 5,
    two: 4
}

console.log(a(m))