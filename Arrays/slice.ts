/*
* slice do shallow copy of arrays. but if array is using object even if we shallow copy and if the object is changed both the arrays will be changed.
*
* */


let myHonda = { color: 'red'};

let myCar = [myHonda, 2, 'cherry condition'];

let newCar = myCar.slice(0, 2);

console.log(newCar); // [ { color: 'red'}, 2 ]
console.log(myCar); // [ { color: 'red'},2,'cherry condition']

myCar[1] = 4;// before consoles wont change, even the myCar wont be changed. only after assignments will be changed.

console.log(newCar); // [ { color: 'red'}, 2 ], if you see newCar is not changed
console.log(myCar);  // // [ { color: 'red'},4,'cherry condition']

// so shallow copy is working fine, if we just update the array.

// lets see by changing the object.

myHonda.color = 'blue';


// both the cars color value is changed, since we changed the object, and both the arrays are using the same object reference.
console.log(newCar); // [ { color: 'blue' }, 2 ]
console.log(myCar); //  [ { color: 'blue' }, 4, 'cherry condition' ]



/*
* slice ->>> slice is return the values in a array from specific indices to up to specific indices.
*       end argument is optional if we didn't provide the second argument it will consider to the end of the array.
*
*    Arguments: both the start and end are optional.
*       a. if we didn't provide both args then a shallow copy is created.
*       b. if we didn't provide the second arg then it will return the array from the start to the end.
*
*    Mutation: it wont mutate the array.
*
*    slice use cases:
*       case 1: to create a shallow copy, deep copy is not possible. means we can create a new array from the
*           original array with out references getting copied.
*       case 2: to create subsets from a array(means slicing the array).
*
*
*       slice is not to remove the elements in the array
*
* */



let array=  [1,2,3,4];
// optional params.
let newArray = array.slice();

console.log(newArray); // [ 1, 2, 3, 4 ]
console.log(array); //[ 1, 2, 3, 4 ]

newArray[0] = 5;

console.log(newArray); // [ 5, 2, 3, 4 ] , newArray is changed
console.log(array); // [ 1, 2, 3, 4 ], oldArray is not changed. shallow copy works

// optional second param
console.log(newArray.slice(0, 1)); // [5], up to 1 index not including 1 index.
console.log(newArray); // [ 5, 2, 3, 4 ], 5 is not deleted, slice wont delete it will just slice the array to subsets
console.log(array); // [ 1, 2, 3, 4 ]  // old array is not changed.

console.log(newArray.slice(3,3)); // [], so here in this case the 2nd arg should be greater than length
console.log(newArray.slice(3, 4)); // [4], we can't use - indeices onthe 2nd arg, so only we can make
// subsets from left to right. not again from last element and 1st element.


/*
* we can also grab the elements from the right side of the array using negative indices
*
* */

let numbers = [1,2,3,4];

// only one argument dont use multiple args.

console.log(numbers.slice(-2)); //[ 3, 4 ]



/*
* Array like objects can be converted to real arrays using Array.prototype.slice.call(arrayLikeObject).
*
* ArrayLike Objects in JS are the dom list of document.querySelectorAll('div'), the above returns are like
* arrays with indices and length but we cant use any of the array methods on that. so we can convert them to
* arrays using prototype method of slice or we can use Array.from or [...arrayLike] spread operator as well.
*
*
* but need to see how performance these are
* */

// Example of using slice and splice and using spread operator.
// frankenSplice([1, 2, 3], [4, 5], 1)should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1)should return ["a", 1, 2, "b"].
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)should return
// ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

function frankenSplice(arr1, arr2, n) {
    // splice syntax -> initial index to insert/delete no elements to delete ,
    // pass insertion elements separated by comma. we can any no of args that needs to be inserted.
    arr2.splice(n, 0, ...arr1.slice()); // if we didnt use spread then [4, [1,2,3] , 5]; so we are spreading the
    // internal array.
    console.log(arr1); // [1,2,3] -> passed array is not mutated.
    return arr2;
} // [4, 1, 2, 3, 5]

console.log(frankenSplice([1, 2, 3], [4, 5], 1)); // // [4, 1, 2, 3, 5]