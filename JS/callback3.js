function first(item) {
    console.log(item)
}
function second(sum1, sum2) {
    let res = sum1 + sum2
    return res
    // return na korle kaj korbena karon return kore value bahire 
    // ante hobe then others function pathai dite hobe
}

let result = second(5, 5);
first(result)
// ==================================================
function first(item) {
    console.log(item)
}
function second(sum1, sum2, callback) {
    let sum = 0
    sum = sum1 + sum2
    callback(sum)
    // return na korle kaj korbena karon return kore value bahire 
    // ante hobe then others function pathai dite hobe
}

second(5, 5, first);
