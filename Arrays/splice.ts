/*
* splice method on JS is used to delete/ add the elements to the array.
*
* Mutation: It will mutate the original array.
*
*
* */


let numbers = [1,2,3,4];

// using just one param. it will splice the array from 0th index.
// start
let newNumbers = numbers.splice(0);


console.log(newNumbers); // [1,2,3,4]

console.log(numbers); // []; original array is modified.

let secondNumbers = [1,2,3,4];

// start, deleteCount - if zero returned will be empty, 2nd param is deleteCount not the index.
// delete count 0 - []
//delete count 4 or higher - [1,2,3,4]
console.log(secondNumbers.splice(0, 0)); // []
console.log(secondNumbers.splice(0, 4)); // [1,2,3,4]


// start index, delete count, elements that needs to be inserted with comma separated.
let thirdNumbers = [1,2,3,4];

let newThirdNumbers =  thirdNumbers.splice(0, 0, 6, 7); // it will add to the start like
// unshift method.

console.log(thirdNumbers); // [ 6, 7, 1, 2, 3, 4 ]

console.log(newThirdNumbers); // [], because we didn't delete anything.

console.log(thirdNumbers.splice(4, 0, 5, 6)); // [], didnt delete so returned is empty array

console.log(thirdNumbers); // [ 6, 7, 1, 2, 5, 6, 3, 4 ]

