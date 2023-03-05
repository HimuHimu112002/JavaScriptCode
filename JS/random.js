function rand(value) {
    let convert = Math.random() * value;
    let finalConvert = Math.round(convert);
    if (finalConvert == 0) {
        return "your age = 0";
    }else if(finalConvert == 1){
        return "your age = 1";
    }else if(finalConvert == 2){
        return "your age = 2";
    }else if(finalConvert == 3){
        return "your age = 3";
    }else if(finalConvert == 4){
        return "your age = 4";
    }else if(finalConvert == 5){
        return "your age = 5";
    }else if(finalConvert == 6){
        return "your age = 6";
    }else if(finalConvert == 7){
        return "your age = 7";
    }else if(finalConvert == 8){
        return "your age = 8";
    }else if(finalConvert == 9){
        return "your age = 9";
    }else if(finalConvert == 10){
        return "your age = 10";
    }
}
let result = rand(10);
console.log(result)