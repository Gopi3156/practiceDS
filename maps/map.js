// Can object can only have keys with strings? or Can object has a object as a key?
// Only one key with object is possbile? how to assign multiple then?
// then comes the map tot the rescue. lets see the problem first and then introduce the map.

const x = {};

const y = {};

console.log(x[y] = {'name' : 'Gopi'});// { name: 'Gopi' } . assigning x[obj] = a brand new object.

console.log(x); // { '[object Object]': { name: 'Gopi' } } output is like this.

console.log(x[y]); // { name: 'Gopi' } . Here x.y wont work, we need to use only x[y]

// lets try assigning a new Object to x.


const z = {};

x[z] = {'name': 'Gowthami'};

console.log(x); // { '[object Object]': { name: 'Gowthami' } }. Where is my previous object.

// so javascript object can only hold one object as a key if you try second one the second one will be only
// available the first one will be lost. lets make sure i am not talking about the keys with string.
// an object can have keys with string types as multiple number but not the object with multiple number.

// lets try another way of making object as a key to the object.. 2nd Way

const a = { 'name': 'Gopi'};

const b = { a : 'Gowthami'}; // This way also we cant assign object as a key to a Object.

console.log(b); // { a: 'Gowthami' }

b[a] = {'last': 'Tadivaka'}; // so we need to do this way only to assign object as a key to Object.

console.log(b); // { a: 'Gowthami', '[object Object]': { last: 'Tadivaka' } }

console.log(b[a]); // { last: 'Tadivaka' }

// lets try 3 rd way to add multiple Objects as key to a Object.

const map = new Map();

const alpha = {'alpha': 'working'};

const beta = {'beta': 'working good'};

const release = { 'release': 'working awesome'};

const release2 = { 'release2': 'working awesome2'};


map.set(alpha, 'a');

console.log(map); // Map { { alpha: 'working' } => 'a' }

// in the console it will return like this. But Map is just a return type actual value is
// { { alpha: 'working' } => 'a' }

map.set(beta, 'b'); // observe clearly key and values are separated by comma here not the Object like colon ":"

console.log(map);// { { alpha: 'working' } => 'a', { beta: 'working good' } => 'b' }

// Here if you see map has two keys as a object.

map.set(release, 'c').set(release2, 'd'); // assigning multiple objects as a keys in a single line

console.log(map);
//{ { alpha: 'working' } => 'a',{ beta: 'working good' } => 'b', { release: 'working awesome' } => 'c',{ release2: 'working awesome2' } => 'd' }

// If you try to add the same key twice with different values only the last key will be available.

// we can loop over map using for of loop

for(let [key, value] of map.entries()) { // only for of loop is available i believe for object to loop
    // over each property we can use Object.keys, values, entries and also for in loop as well
    // good to know we can use for in loop to loop over object properties.
    console.log(key, value); // { alpha: 'working' } 'a', { beta: 'working good' } 'b' and so on..
}

// we can convert an map to array using spread opearator

var arr = [...map];

console.log(arr); /*[ [ { alpha: 'working' }, 'a' ],
[ { beta: 'working good' }, 'b' ],
    [ { release: 'working awesome' }, 'c' ],
    [ { release2: 'working awesome2' }, 'd' ] ]*/

// the above will be two dimensional array array with each key value pair with an array.
{
    const m = {'name' : 'Gopi'};

    const map1 = new Map(); // new WeakMap();

// If you try to re-use the same variable with new Map() it will give an error. not sure may be that was because
// of const keyword.

    map1.set(m, 'Wasikar');
    console.log(m);
}

// console.log(m); // Here we will get m is not defined.

console.log(map1); // { { name: 'Gopi' } => 'Wasikar' }. somehow after introducing block like above {} map1 is also
//coming as undefined. But it should give the value but if we use weakmap then it should be undefined. weakmap is kind
// of garbage collected after the block scope.