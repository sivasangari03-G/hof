var arr = ["a", "ab", "abc", "abcd"]

var res = arr.filter(function (element) {
    return element.length % 2 != 0
})

var result = res.reduce(function (prevVal, currVal) {
    return prevVal.length + currVal.length
})

console.log(result);