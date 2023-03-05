const lex5 ={
    a:function(){
        console.log(this)
    return function(){
        console.log(this)
    }
    }
}
lex5.a()();  // problem ase