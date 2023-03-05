class person{
    constructor(name){
        this.name = name;
    }
    static hello(e){
        return e.name;
    }
    // function use korle surute static use kora jabena 
    // object er sathe static use kora jabena only class er sathe use kora jabe
}
let res = new person("Aktarujjaman")
console.log(res)
