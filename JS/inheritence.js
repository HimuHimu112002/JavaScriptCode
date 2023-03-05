class student{
    constructor(name, age, roll){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.school = "Dhaka collage"; // akhane use korle sobar jonno common
    }
}

class id extends student{
    // entends korake js class inheritance bole
    constructor(name, age, roll, id){
        super(name, age, roll)
        this.id = id; // akhane use korle specipic 
        
    }
}

let result = new id("himu", 20, 1);
let result1 = new id("HIMU", 20, 1, 100);
console.log(result, result1);