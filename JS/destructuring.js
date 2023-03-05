const person ={
    Name: "Himu",
    age: 20,
    roll: 1,
    student: ["1", "2", "3"],
    a: function hh(){
        console.log("Aktarujjaman");
    }
}
// const Name = person.name;
// console.log(Name);

const {a} = person; // name dile name bade all print korbe.
console.log(a())