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
// call use na korle function er upore jei object thakbe seita kaj korbe
firstOb.anotherOb.three.value.call(firstOb);
// call use korle akdom main object thakbe seita kaj korbe
firstOb.anotherOb.three.value.call(firstOb.anotherOb);
// same vabe jeto inner object asbe serial thik rekhe first() vitore
// serial vabe likhte hobe
