const hello ={
    name: "Himu",

}
hello.fullname = function(){
    return (this.name).toUpperCase()
    // object er bahire avabe object method banai call kora jai
}
console.log(hello.fullname())