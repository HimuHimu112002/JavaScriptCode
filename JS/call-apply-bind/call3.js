const person = {
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person2 = {
    firstName: "MD :",
    lastName: "Himu"
}

console.log(person.fullName.call(person2))
