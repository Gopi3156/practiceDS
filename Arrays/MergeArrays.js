let numbers = [1,2,3,4];

let newNumbers = [4,5,6,7];

// using spread syntax we can merge arrays.
let spreadNumbers = [...numbers, ...newNumbers];

console.log(spreadNumbers); // [ 1, 2, 3, 4, 4, 5, 6, 7 ]

// using concat we can concat arrays
let concatNumbers = numbers.concat(newNumbers);

console.log(concatNumbers); // [ 1, 2, 3, 4, 4, 5, 6, 7 ]

// using set and spread operator we can remove duplciates before merging the arrays.
var setArray = ([...numbers, ...newNumbers]);

console.log(setArray);

// Converting set to Array using Array.from. This way duplicates will be removed.
console.log(Array.from(new Set(setArray))); // [ 1, 2, 3, 4, 5, 6, 7 ]

// single line [...new Set([...array1 ,...array2])];

// we can also use [...new Set(setArray)] somehow this is not working in Typescript, looked into internet and
// everyone suggested to use Array.from in TS .
// Error : ERROR TypeError: (intermediate value).slice is not a function


/*
* 4 th way is simply using push method on the array with spread
* */

numbers.push(...newNumbers); // array will be spread as values with comma separated.
console.log(numbers); // [ 1, 2, 3, 4, 4, 5, 6, 7 ]
