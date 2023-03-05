console.log("Himu = 1")
console.log("Himu = 2")
console.log("Himu = 3")
// ==========  Syncronous ==========
console.log("Himu = 1")
setTimeout(function(){
    console.log("Himu = 3")
    // setTimeout Asynchronous function
}, 1000)

console.log("Himu = 2")