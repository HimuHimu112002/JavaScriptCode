function hello(name, functionHandle) {
    functionHandle(name)
    // hello theke name and night function asbe then name parameter er
    // vetore name store hobe and functionHandle er vetore night function store
    // hobe then functionHandle call hobe and tar vetore thaka aktarujjaman name 
    // night function er veotre niye bosabe.
}
const result = "Aktarujjaman";
function morning(name) {
    console.log('Good Morning', name)
}
function evening(name) {
    console.log('Good evening', name)
}
function night(name) {
    console.log('Good night', name)
}
hello(result, night);
hello("Himu", morning);
hello("MD", evening);