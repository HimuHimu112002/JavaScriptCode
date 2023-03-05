let firstOb = {
    name: "Himu",
    age: 21,
    anotherOb:{
        name: "Aktarujjaman",
        age: 20,
        three:{
            name: "nayem",
            age: 15,
            value: function(){
                console.log(`My name is ` + this.name + ` My age is ` + this.age)
            }
        }
    }
}
firstOb.anotherOb.three.value();

firstOb.anotherOb.three.value.apply(firstOb);

firstOb.anotherOb.three.value.apply(firstOb.anotherOb);


// ==========================IMPORTANT
// jodi kokhono apply er majhe duti value dite hoi and first valuer kono
// proyojon na thake tahole fak ba null ba 0 kisu akta dite hbe

// Math.max.apply(0, [1,2,3])
// 0 er akhane faka ba 0 ba null akta dilei hobe