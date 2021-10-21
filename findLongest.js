function findLongest(array) {
    let index = [0];
    let longest = "";
    for(let i = 0; i < array.length-1; i++){
        if(array[i].length == longest.length) {
            index.push(i);
        }
        if(array[i].length > longest.length) {
            index = [i];
            longest =  array[i]
        }                  
    }
    return (index);
}