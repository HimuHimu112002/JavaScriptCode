let a = 100;
function hello(params) {
    let name = "Himu"
    console.log(a)
    function inner(params) {
        console.log(name);
        console.log(a)
    }
    inner();
}
hello();