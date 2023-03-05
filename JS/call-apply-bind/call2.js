let karim={
    name:"karim",
    age: 21,
    year: function(newYear){
        console.log(this.name + ` is ` + (newYear - this.age) + ` Years old`);
       
    }
}
karim.year(50)
// akhaner 50 jabe function er parameters hisabe then 50-21 hoiy result 
// show korbe

let rahim = {
    name: "himu",
    age: 10
}

karim.year.call(rahim, 30)
// akhaner 30 jabe function er parameters hisabe newYear er vitore
// then 30-10 hoiy result show korbe