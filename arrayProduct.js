var arr = [1, 2, 3, 4, 5, 6];

var res = arr.reduce(function (prevValue, currValue) {
    return prevValue * currValue;
})

console.log(res);