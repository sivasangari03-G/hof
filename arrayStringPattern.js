//Given an array of strings print the strings whose first or last letter is a (filter)

var arr = ["abcd", "abca", "a", "ab", "bcd", "cde","bcdefa"];

var res = arr.filter(function (elem) {
    return elem[0] == "a" || elem[elem.length-1] == "a"
})

console.log(res);