function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return "Value is not founded"
    
}

let result = linearSearch(["a","b","c","d"], "c")
console.log(result)