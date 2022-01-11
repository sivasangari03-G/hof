var arr = [1, 2, 3, 4, 5,6];

var res = arr.filter(function (elem) {
    return elem % 3 == 0
})

//console.log(res);

var cube = res.map(function (elem) {
	return elem*elem*elem;
});

var sum = cube.reduce(function (prevValue,currValue) {
	return prevValue+currValue;
});

console.log(sum);