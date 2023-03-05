const a = new Map([
    ["1",1],
    ["2",2],
    ["3",2],
    ["4",40],
]);
// Duplicate key use kora jabena but duplicate value 
// use kora jabe.
// Add value in map
a.set("10", 100)
//console.log(a.values())
// Key er under kon value ase seta dekhar jono get() use korte hoi
// console.log(a.get("1"))
// console.log(a.size)
// a.delete("2");
// a.has("2");
//console.log(a)
let s = "";
for (const x of a.entries()) {
    s+= x;
}


