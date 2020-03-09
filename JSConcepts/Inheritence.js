// Trying to Find out the differences between Class based and prototype based inheritence in JS

// remember the class should be small C is not capital and no need of using () after the className like fn
// similarly like fn expressions and fn declarations we also have same for classes as well.
// below is the class declarations
// class expression syntax is like let printName = class {}
// Fn declarations are hoisted but class declarations are not so we will get reference error if we use before declaring
// and className with first letter capital is also not required but for java the first letter of class needs to be capital

class printName {
    // no need to declare the below as global variables. we can directly use this.
    // we need to use the constructor keyword.
    constructor(firstName, lastName) {
        this.firstName= firstName;
        this.lastName = lastName;
    }

    // no need to have function keyword before the method name.
    printCompleteName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// we can create n number of objects and everything has separate scope
let firstObj = new printName("Gopi", "Krishna");
console.log(firstObj); // so firstObj is the obj{ firstName: 'Gopi', lastName: 'Krishna' }
let secondObj = new printName("Gowthami", "Chandana");
console.log(firstObj.printCompleteName()); //Gopi Krishna
console.log(secondObj.printCompleteName()); // Gowthami Chandana


// class Expression way 2 ways named and unnamed
// unnamed class exp - storing class in a variable
let PrintJobRole = class {
    // named class exp is like let printJobRole = class PrintJobRole2 {}. here the variable and classname
    // should be different.
    constructor(role) {
        this.roleType = role;
    }
    printRoleType() {
        return this.roleType;
    }
};

console.log(new PrintJobRole("Front End").printRoleType()); // Front End

// Classes has static method types and static methods can only be called with the direct class Name
// instance is not required and it will be undefined if you try to call with instance.
