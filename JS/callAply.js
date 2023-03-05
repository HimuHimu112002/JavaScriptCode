let person = {
    firstName: "Himu1",
    lastName: "Himu2",
    age1: 20,
    fullName: ()=>{
        console.log(this.firstName, this.lastName);
    },
    age: function(boyos){
        // console.log(this)
        this.age1 = this.age1 - boyos;
        return this.boyos;
    }
}

const himu ={
    firstName: "momo",
    lastName: "Himu",
    age: 1000,
}
//person.age(10);
//console.log(person.age1);

let hello = person.age.fullName.bind(himu);
hello(100);
hello(500);
// console.log(himu.age);
