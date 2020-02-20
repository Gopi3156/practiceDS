/*
* Removing duplicate items from a array.
* */

var temp = [1,2,3,4,4];

// 1st solution which we normally know of..
// using indexOf === -1 means not there in the new array so we can push the elements.
var finalArray = [];
temp.forEach(function(ele) { // this line is of complexity n
    if(finalArray.indexOf(ele) === -1) { // this line is of complexity n. basically we are comparing each element of array with outer forloop element
        console.log(ele);  //
        finalArray.push(ele);
    } // so the total complexity is n* n => n square.
});

console.log(finalArray); // [ 1, 2, 3, 4 ]


// 2nd solution, store the values as a keys of an object and convert that to array back. complexity is just "n"

var numbers = [1,2,3,4,4,4];

var obj = {};

for(let ele of numbers) { // heard for of is better than for, for in , foreach
    obj[ele] = true; // the complexity for looping a single array is just "n";
}

console.log(obj); // { 1: true, 2: true, 3: true, 4: true }

var finalArray = Object.keys(obj);

console.log(finalArray); // [ '1', '2', '3', '4' ]. so the duplicates are removed.


// 3rd solution using Set and then converting that to array using spread operator.

var numbers = [1,2,3,4,4,4];

var set  = new Set(numbers); // Set is a new Datatype in ES6.

console.log(set); // { 1, 2, 3, 4 }

var finalArrayFromSet = [...set];

console.log(finalArrayFromSet); // [ 1, 2, 3, 4 ]

// single line  [...new Set(numbers)]