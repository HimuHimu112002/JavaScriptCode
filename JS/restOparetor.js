function rest(...a) {
    let sum = 0;
    a.filter((x) => {
        if(x != 5){
            console.log(x);
        }
    })
    
}
rest(1,2,2,3,4,5,6);