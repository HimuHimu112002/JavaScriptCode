const person = {
    name: "Himu",
    age: 21,
    get full(){
        return this.name + ' ' + this.age
        // get building function
        // jodi amra akhane get na likhe akti property niye functio er maddhome
        // full name ber kortam tahole output akti full function amader diye dito
        // and get kono function return korena
    },
    set lan(e){
        this.xxx = e
        // set building function ja use kore object new akti property and value 
        // set kora jai
    }
}
person.lan = "english"
console.log(person)