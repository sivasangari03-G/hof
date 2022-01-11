//Given an array of strings print the snake case of the strings (reduce) [Assume Small case strings]

var arr = ["camelCase", "snake_case", "snack_case_example", "camelCaseExample"];

var res = arr.filter(function (elem) {
    return elem.includes("_")
})

console.log(res);
