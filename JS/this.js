const person1 = {
    fullname: function(){
        return this.firstname+ " " + this.lastname; 
    }
}

const person2 = {
    firstname: "MD",
    lastname: "Himu",
}
console.log(person1.fullname.call(person2))

// system two=======================
const person3 = {
    firstname: "MD",
    lastname: "Himu",
    fullname: function(){
        return this.firstname+ " " + this.lastname; 
    },
    getname: function(){
        return this.fullname();
    }
}
console.log(person3.getname())