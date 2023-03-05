let a = "Aktarujjaman Himu";
let s = a.indexOf('u');
console.log(s); //OutPut = 5;

let a1 = "Aktarujjaman Himu";
let s1 = a1.search('m');
console.log(s1); //OutPut = 9;
//search 2nd parameters use kora jabena

let a2 = "Aktarujjaman Himu";
let s2 = a2.match(/m/g);
console.log(s2); //jekoti m ase sei koti dekhabe.

let a3 = "Aktarujjaman Himu";
let s3 = a3.includes("Himu");
console.log(s3); //true.

let a4 = "Aktarujjaman Himu";
let s4 = a4.includes("A",12);
console.log(s4); //false karon first theke 12 ta char.
//delete houyar pore r kono A nai so false output asbe

let a5 = "Aktarujjaman Himu";
let s5 = a5.startsWith("A");
console.log(s5); //true

let a6 = "Aktarujjaman Himu";
let s6 = a6.startsWith("j",6);
console.log(s6); //true asbe karon j 6 number index ase
//5 dile false asbe karon j 5 number index nai.

let a7 = "Aktarujjaman Himu";
let s7 = a7.endsWith("u");
console.log(s7); //

let a8 = "Aktarujjaman Himu";
let s8 = a8.endsWith("u",6);
console.log(s8); // true asbe but startsWith theke aktu alada
//first theke 6 ta index check korbe er vetore u thakl true na 
//na thakle false

