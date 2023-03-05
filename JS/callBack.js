function back(a) {
    console.log(a);
}
function back2(b, c, CallBack) {
    //console.log(CallBack); // output function
    let sum = 0;
    sum = b + c;
    CallBack(sum); // CallBack er vetore back namer function store ase.
}
// function back(a) { // akhaneo use kora jabe
//     console.log(a);
// }
back2(10,20,back);
// NOTE: Step-1 === first amra main function console korbona 
// sei jonno akta alada function likhe nilam.
// Step-2 === main function call korar time amra uporer function
// arguments hisabe pathalam and main function akti parameter er maddhome 
// fucntion recived korlo so parameter ta akhon console korle function convert hoise
// dekhabe then main fucntio all kaj kore amra parameter function er vetor
// pathai dibo then parameter function jei fucntion recived korese sei function
// er kase jabe and sei function er majhe jei parameter ase tar kase jabe then 
// console print hobe. 