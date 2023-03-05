const findArray = [1,2,3,4,5,6,7,8,9]

let result = findArray.find(function(currentValue){
    return currentValue > 6
})

const findIndexArray = [1,2,3,4,5,6,7,8,9]

let result2 = findArray.findIndex(function(currentValue){
    return !(currentValue % 9)
    // akhane ! use korar karon holo jekono sonkha 1 dara vag korle vagses 0 hoi se jonno ! 
    // use kora hoiye se
}, this)

console.log(result +' '+ result2)