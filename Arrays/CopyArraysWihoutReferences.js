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
