//Given an array of strings print the snake case of the strings (reduce) [Assume Small case strings]

var arr = ["a", "b", "c", "d"];

var res = arr.reduce(function (prevValue, currValue) {
    return `${prevValue}_${currValue}`
})

console.log(res);
