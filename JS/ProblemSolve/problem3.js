function longString(nams) {
 
    let longArray = '';
    for (item of nams) {
        if (item.length > longArray.length) {
            longArray = item;
        }
    }
    return [longArray, nams.indexOf(longArray)];
}
console.log(longString(["himu", "aktarujjaman"]))