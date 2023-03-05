let firstOb = {
    name: "Himu",
    age: 21,
    anotherOb:{
        name: "Aktarujjaman",
        age: 20,
            value: function(){
                console.log(`My name is ` + this.name + ` My age is ` + this.age)
            }  
    }
}
firstOb.anotherOb.value();

let result = firstOb.anotherOb.value.bind(firstOb);
result();
// bind use korle age akti variable er majhe store korte hobe
// then function er moto call kore use korte hobe
