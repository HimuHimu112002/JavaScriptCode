class student{
    constructor(name, age, roll){
        this.name = name;
        this.age = age;
        this.roll = roll;
        this.school = "Dhaka collage"; // akhane use korle sobar jonno common
    }
}

class id extends student{
    constructor(name, age, roll, id){
        super(name, age, roll)
        this.id = id; // akhane use korle specific 
        
    }
}

let result = new student("himu", 20, 1);
let result1 = new id("HIMU", 20, 1, 100);
console.log(result1, result);