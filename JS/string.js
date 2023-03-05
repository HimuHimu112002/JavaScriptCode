let str = "Amar des bangladesh";
console.log(str.slice(4,7)); //Output = de

let str1 = "Amar des bangladesh";
console.log(str1.slice(-7,-4)); //Output = gla

let str2 = "Amar des bangladesh";
console.log(str2.substring(4,7)); //Output = de substring 
//negative index accept korena

let str3 = "Amar des bangladesh Amar";
console.log(str3.replace("Amar", 'Himu')); //Akhane first 
//amar ta change hobe last ta hobena

let str4 = "Amar des bangladesh Amar";
console.log(str4.replace(/Amar/g, 'Himu')); //Akhane multiple 
//amar ta change hobe

let str5 = " 'Amar des bangladesh Amar'       ";
console.log(str5.trim()); //All space are remove both site

let str6 = "Amar des bangladesh Amar";
console.log(str6.split(",")); //Akti array return korbe , diye