// ways to copy an array with a new reference. below is the problem

var cart = ['banana', 'apple', 'grape'];

var newCart = cart;

console.log(cart); //[ 'banana', 'apple', 'grape' ]

console.log(newCart); // [ 'banana', 'apple', 'grape' ]

cart[0] = 'newBanana';

// since both the arrays are pointing to the same reference values modified in one array is making its
// effect on the another array.

console.log(cart); //[ 'newBanana', 'apple', 'grape' ]

console.log(newCart); // [ 'newBanana', 'apple', 'grape' ]

//1st way using spread operator.

var items = ['banana', 'apple', 'grape'];

var newItems = [...items];

console.log(newItems);

items[0] = 'newbanana';

// if you see below the values are not changed like previously. so spread operator here kind of created a new array
// and copied the elements.

console.log(items);// [ 'newbanana', 'apple', 'grape' ]
console.log(newItems);// [ 'banana', 'apple', 'grape' ]


// 2nd way is using slice();

var ideas = ['banana', 'apple', 'grape'];

var newIdeas  = ideas.slice();
ideas[0] = 'newbanana';

// slice above created a new array and copied the values not the references.

console.log(ideas); // [ 'newbanana', 'apple', 'grape' ]
console.log(newIdeas); // [ 'banana', 'apple', 'grape' ]

// 3rd way is using traditional forloop and pushing to a new array.

var ideas = ['banana', 'apple', 'grape'];
var newIdeas = [];

for(var i =0; i < ideas.length; i++) {
    newIdeas.push(ideas[i])
}

console.log(newIdeas); // [ 'banana', 'apple', 'grape' ]
console.log(ideas); // [ 'banana', 'apple', 'grape' ]

newIdeas[0] = 'newBanana'; // FYI: after this the previous consoles wont change. if we print console then after
// even the newIdeas is changed. but if we try to use that variable next onwards it will be changed.

console.log(newIdeas); // [ 'newBanana', 'apple', 'grape' ]
console.log(ideas); // [ 'banana', 'apple', 'grape' ]


// 4th way is using Array.from

let fruits = ['banana', 'apple', 'grape'];
//var newIdeas = [];


let newFruits = Array.from(fruits);
fruits[0] = 'newBanana';
console.log(fruits); // [ 'newBanana', 'apple', 'grape' ]
console.log(newFruits); // [ 'banana', 'apple', 'grape' ]

// 5th way is using Object.assign([], ['apple', 'banana'];

let heroes = ['chiru', 'pawan', 'Nag'];

newHereos = Object.assign([], heroes);

console.log(newHereos);

newHereos[0] = 'Mahesh';

console.log(newHereos); //[ 'Mahesh', 'pawan', 'Nag' ]
console.log(heroes); // [ 'Chiru', 'pawan', 'Nag' ]


/*
* All the above are only used for shallow copies not for deep nested objects or arrat copies. For that the
* solution i see using JSON.stringfy(javaScript object) and then using JSON.parse(retured JSON stringify) object.
*
*
* */


let obj = {name: {firstName: 'Gopi'}};

let newObj = Object.assign({}, obj);

console.log(newObj); // { name: { firstName: 'Gopi' } }
console.log(obj); // { name: { firstName: 'Gopi' } }

newObj.name.firstName = 'Krishna';

// see both the below firstName are changed to Krishna
console.log(newObj); // { name: { firstName: 'Krishna' } }
console.log(obj); // { name: { firstName: 'Krishna' } }

// the above is the problem, the only solution i see is the JSON.stringfy and JSON.parse

let secondObj = {name: {firstName: 'Gopi'}};

let secondNewObj = JSON.parse(JSON.stringify(secondObj));

console.log(secondObj); // { name: { firstName: 'Gopi' } }
console.log(secondNewObj); // { name: { firstName: 'Gopi' } }

secondNewObj.name.firstName = 'Krishna';

console.log(secondNewObj); // { name: { firstName: 'Krishna' } }
console.log(secondObj); // { name: { firstName: 'Gopi' } }

// see above example did the deep copy with out effecting the original Object.

/*
*
* so far i only see JSON.parse and JSON.stringfy are the only two ways to do the deep nested copies.
*
* this can be used for both the arrays and objects.
* */