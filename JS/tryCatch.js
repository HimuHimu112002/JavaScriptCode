let num = 10;
try {
    if (num > 150) {
        throw "This is small number"
    }else if(num < 100){
        throw "This is less then 100"
    }else if(num == 100){
        console.log("OK")
    }
} catch (err) {
    //console.log("Hi")
    console.log(err) // err print korle ki problem seta janai dibe
    // and condition false hole throw korbe err er kase asbe and print korbe.
}finally{
    console.log("Himu") // defualt all time print korbe jodi amra use kori
}