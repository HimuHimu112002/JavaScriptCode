function person(first, age){
    this.firstName = first;
    this.age = age;
    this.fullName = function(){
        return this.firstName + ' ' + this.age
    }
}

const result1 = new person("Himu", 21)
const result2 = new person("hira", 25)
console.log(result2.fullName())

// adding a new property in function connstructor
person.prototype.roll = 10
console.log(result1.roll)