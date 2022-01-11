//Given an array of strings print the length of each string (map)

var arr = ["apple", "orange", "pineapple"];

var res = arr.map(function (elem) {
    return elem.length;
})

console.log(res);