function FullName(firstName, LastName) {
    let name = "";
    for (let i = 0; i < arguments.length; i++) {
        NewStoreName = arguments[i];
        name = name + ' ' + NewStoreName; 
    }
    return name;
}
let result = FullName("MD", "himu", "aktarujjaman");
console.log(result);