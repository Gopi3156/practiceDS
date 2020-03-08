// design your own filter method.


var numbers = [1,2,3,4];
var newNumbers = [];

const filter = () => {
    numbers.forEach(ele => {
        if(ele > 2) {
            newNumbers.push(ele);
        }
    });
    return newNumbers;
};

console.log(filter());


/*
* Write Filter function on the Array.prototype
*
* */


Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for(let i=0; i< this.length; i++) { // here this refers to the calling object
        if(callback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const newNum = numbers.myFilter((ele) => { // Array.prototype method.
    return (ele % 2 === 0); // this is kind of predicate fn that return either true or false. based on this the
    // values are passed in the actual function.
});
console.log(newNum);

