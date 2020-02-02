// Finding a longest word in a string. may be one way

var name = 'my name is Gopi';
var name = name.split(' '); // split array by space and returned is array os strings.
console.log(name); // [ 'my', 'name', 'is', 'Gopi' ].
console.log(name.reduce(function (acc, ele, index, array) { // four params, accumulator, element, index, array
    acc[ele] = ele.length;
    return acc; // reduce will return for each iteration and here we are returning the object because the second
    // parameter is the return type and here we are dynamically adding props to the object after equals we are
    // adding the values to it.
}, {}));