var arr = ["platzi", "master", "frontend", "developer", "cohort8"]

function longestString(array) {
    var longestString = ""
    array.forEach(function(str) {
        if (str.length > longestString.length) {
            longestString = str
            index = array.indexOf(longestString)
        }
    })
    var result = 'La cadena más larga del array es: "' + longestString + '". El indice de la palabra es: ' + index
    return result
}

console.log(longestString(arr))