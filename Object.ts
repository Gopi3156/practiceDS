/**
 * Creates an new Object by inheriting the used object and basically that doesn't mean the properties
 * are copied, but we can use the previous object and can override the existing properties, so in this
 * case better use this operator in the existing object so that the context will vary based on which object
 * is calling that..
 *
 * This is Object.create();
 * Ref Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create.
 */


const existingObject = {
    initial: 'Tadivaka',
    modifyName : function () { // But if we use arrow function this refers to global object, not on the calling object
        return `${this.name} ${this.initial}`;
    }
};

const newObject = Object.create(existingObject);
console.log(newObject); // {},  Here if you see existing object props are not copied. but we can override. this is prototype.
newObject.initial = 'NewTadivaka'; // inherited and modified.
newObject.name = 'Gopi'; // inherited and modified.
console.log(newObject.modifyName()); // Gopi NewTadivaka, no need to pass name to the fn, because we are using this object
console.log(existingObject.modifyName()); // undefined Tadivaka, because name is not defined in existing obj


/**
 * Different types of Object declarations
 *
 */

var lastName = 'Tadivaka';
const variousobject = {
    name: 'Gopi',
    lastName, // In ES6, if property and values property name are same then we can use this way instead of lastName: lastName;
    modifyLastName : () => { // arrow or function syntax, but here this will vary based on arrow vs function syntax
        // fn takes callign object this arrow takes global object this reference
        // If you want to use this with arrow function then create using class.
        return `${this.lastName}` // this will take line 32 global may be, but its not happening may be we are using Typescript thatswhy.
    },

    set lastNameProp(name) { // directly can call obj.lastNameProp = 'Chandana';
        this.lastName = name;
    },

    ['dynamicprop'] : 'dynamicValue' // keys can be dynamic even it can have some annonymus function with soem return value.
};

console.log('variousobject.lastName', variousobject.lastName);

console.log(variousobject.modifyLastName()); // coming as undefined, in this case we need to use class to create an object and call arrow fn
variousobject.lastName.log

class UseArrowClass {
    constructor(firstName, lastName) {
        this.firstName = firstName; // no need to declare them anywhere. This is declaration and also assignment operators.
        this.lastName = lastName;
    }
    concatFirstAndLast() {
        return this.firstName + ' ' + this.lastName;
    }
}

const newObj = new UseArrowClass('Gopi', 'Tadivaka');
console.log('newObj.concatFirstAndLast()' , newObj.concatFirstAndLast());
