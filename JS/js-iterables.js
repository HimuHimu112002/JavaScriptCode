const arr = [1,2,3,4,5,6,7,8,9,4,2,5,7];
for (const item of arr) {
    console.log(item)
}

const ob = {
    one: 1,
    two: 2,
    three: 3
}
let text = ''
for (const item in ob) {
    // console.log(item)
    text += ob[item]
}
console.log(text)