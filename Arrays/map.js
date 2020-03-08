// design your own map method in JavaScript

let array = [1,2,3,4];

// map should always return newArray and should not mutate the original Array.
Array.prototype.myMap = function(callback) {
    let newArray = [];
    for(let i=0; i< this.length; i++) { // this refers to the calling Object.
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
};


const returnedMap = array.myMap((ele, index, array) => {
    console.log(index); // 0,1,2,3.
    console.log(array); // [ 1, 2, 3, 4 ] * 4
    return ele * 2;
});

console.log(returnedMap); // [2,4,6,8]

const objs= [{name: 'Gopi', family: 'Tadivaka'}, {name: 'Gowthami', family: 'Chandana'}];


// map output will be always array. since it is pushing the callback into new array. so thats why you will
// see strings in a array because we are returning string for each iteration.
console.log(objs.map((ele) => ele.name)); // ["Gopi", "Gowthami"].

// original array wont be changed since we are pushing to new Array.
console.log(objs); // [{name: 'Gopi', family: 'Tadivaka'}, {name: 'Gowthami', family: 'Chandana'}]

// doing double map. map chaining with a map

console.log(objs.map((ele) => ele.family).map(ele => ele.toUpperCase()));
// [ 'TADIVAKA', 'CHANDANA' ]
// First map returns array once all the iterations are completed then the second map will be triggered
// for each iteration and return a new Array.


