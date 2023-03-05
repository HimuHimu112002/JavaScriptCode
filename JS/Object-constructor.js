function person(first, age){
    this.firstName = first;
    this.age = age;
    this.fullName = function(){
        return this.firstName + ' ' + this.age
    }
}

let result = new person("HIMU", 21)
let result1 = new person("Hira", 25)

// new adding value
result.roll = '10'
person.roll = 10 // constructor name diye kono value add kora jabena
console.log(result) // adding value dekhte hole just variable name print korte hobe
console.log(result.fullName())
console.log(result1.fullName())