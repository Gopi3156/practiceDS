let numbers = [1,2,3,4];

Array.prototype.myReduce = function (callback, init) {
    let accumulator = init;
    for(let i=0; i< this.length; i++) {
        accumulator  = callback.call(this, init, this[i], i, this);
    }
    return accumulator;
};

const result = numbers.myReduce((acc, ele, index, array) => {
    return acc + ele;
}, 0);

console.log(result); // 4.

let repeats = [1,2,3,1];

console.log(repeats.myReduce((acc, ele, index, array) => {
    if (acc[ele] === undefined) {
        acc[ele] = 1;
    } else {
        acc[ele] = acc[ele] + 1;
    }
    return acc;
}, {})); // { 1: 2, 2: 1, 3: 1 }

