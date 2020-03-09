// this keyword in JavaScript

/*
* Use Case 1 : this as a global object
*
* */

this.name = 'Gopi';
// window.name = 'Gopi';

/*
* in JS name = 'Gopi';
*
* this can be accessed like this.name or window.name
*
* but in TS we need declare and assign to a variable or use this.name or var name = 'Gopi';
*
* */

console.log(this.name); // Gopi, this is similar to global.name in JS. since we are using in TS.
// you will see window is undefined.


/*
* Use Case 2: this in a Object
*
* */

let first = {
    name: 'Gopi',
    printName: function() { // or printName() {}, es6 way
        return `my name is ${this.name}`;
    }
};

let second = {
    name: 'Gowthami',
    printName() { // or printName() {}, es6 way
        return `my name is ${this.name}`;
    }
};

// lets see can we use printName function with out extending my one of the parents
// we can rely on call apply and bind without redifing the function again here on the other object
// and we can just the this of the caller object.
let third = {
    name: 'Tarun'
};

console.log(first.printName()); // my name is Gopi. so this refers to first object
console.log(second.printName()); // my name is Gowthami. so this refers to second object.
console.log(second.printName.call(third)); // my name is Tarun., first object is always the context
// it can be this or obejct or undefined and from next onwards we can pass args if we have with comma separated.


/*
* use case 3: Using this inside a function
*
* usually this is not the scope of function it is only the scope of the object that we are calling with
*
* so if you are using this inside a function and if that fn is not inside any object means this is undefined if we
* just call that function. so we need to bind that function thatswhy we need to rely on call apply and bind in JS
*
* */

// the problem

'use strict';

this.jobTitle = 'JavaScript Developer';


// we can use global variable inside the fn but not the this.
var printJobTitle = function() {
    // so even in JS if we use this inside a fn it wont refer to the global variable if it is not avaible inside
    // a fn this will be undefined. because this is not related to a fn its only to objects
    return `I am a ${this.jobTitle}`; // Error: cannot read property 'JobTitle' of undefined.
};
console.log(printJobTitle()); // in JS it is a error

console.log(printJobTitle()); // in TS it is I am a undefined, because there is no 'use strict' in TS. and
// everyfile has some this.

//here this is global obj
console.log(printJobTitle.call(this)); // I am a JavaScript Developer
console.log(printJobTitle.call(third)); // I am a undefined, because third object doesnot have jobTitle prop.

/*
* use case 4: this inside a inner function
*
*
* */
// if we use const obj = {name: 'Gopi'}; it will print Gopi on the console because of global variable.
this.myName = 'Gopi';

let outer = function(_this) {
    let that = _this;
    const inner = function() {
        // we cant access this inside the fn because this is no way related to a fn.
        // to solve this either we need to store the outer this to a that varialbe
        // 2ns sol is call the inner fn using call method
        console.log(that.myName); // Gopi, storing outer this reference to a variable.
        console.log(this.myName); // undefined or error depends on TS vs JS
    };
    inner();
    // inner.call(_this);, using this way we can bind this to a fn
    // inner.bind(_this)(); bind returns fn with the passed context and call that
};

outer(this); // obj

/*
* use case 5: using this inside a constructor Fn
* */


const createPerson = function (name) {
    this.name = name;
    // we cant create fn's like this inside a constructor Fn. so we need to create on prototype like below
    /*printMyName = function() {
        return `my name is ${this.name}`;
    }*/
    // we cant even use return here because we are using this here and we create objects using new keyword
    // and it wont return anything. so we need to write a fn on prototype.
};

// we can define methods on the constructor Fn on a prototype.

// this is a method added on the prototype space of the createPerson not on the createperson
// so this wont be created for every object creation from the CreatePerson
// where as instance variables like name will be created for every instance creation(new Keyword)
createPerson.prototype.printMyName = function() {
    return `my name is ${this.name}`;
};

// we have to use new for sure. this is the way to use call constructor Fn.
const Gopi = new createPerson('Gopi');
const Gowthami = new createPerson('Gowthami');

console.log(Gopi.printMyName()); // my name is Gopi, this refers to Gopi Obj
console.log(Gowthami.printMyName()); // my name is Gowthami, this refers to Gowthami Obj

/*
* use case 6: this inside a class
* */
// refer to inheritence.js file
// ES6 way of using classes
// class keyword and className no () are required
class createPersonFromClass {
    // constructor is required, which is resposible of initialization by creating instance variables for
    //every obj creation
    constructor(name) {
        this.name = name;
    }

    // methods on the class methodName() this refers to the class level not even to the method level
    printName() {
        return `my name is ${this.name}`
    }
}

const GopiFromClass = new createPersonFromClass('Gopi');
const GowthamiFromClass = new createPersonFromClass('Gowthami');

console.log(GopiFromClass.printName()); // my name is Gopi
console.log(GowthamiFromClass.printName()); // my name is Gowthami