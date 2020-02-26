/*
* trying to layout all the use cases of closures in JavaScript.
*
* Def: The inner function will have access to the variables in the outer function scope,
* even after the outer function has returned.
* */



var a; // here a needs to be the global variable just the declaration is fine.
// this is not closure because a here is global variable so all the functions can access this
var inner = function() {
    // though this is inner fn as part of addTwo can the a variable is available??
    // and here we are not passing abything to this inner fn. can we access the varialbe a??
    // yes because of closure
    console.log(a);
    return a
};

function addTwo(b) { // outer fn returning inner fn and lets see even after the execution the inner fn
    // can remember the outer fn scope or not??
    a = b; // we are re-assigning the global varialbe. so this is because of global variable right not
    // because of closure i feel?????
    return inner; // here inner is a fn already defined. but here we are not passing argument to the fn
    // here we can call the inner() then calling addTwo can return value as 1. but here we are returning the innerfn
    // and that will be called later on..
    //
}

var innerFn = addTwo(1); // the execution is done and basically the addTwo fn is removed from the call stack
console.log(innerFn);
console.log(innerFn()); // 1;


// 2nd example of using closure. 1st one is because of global variable

function printName() {
    var name = 'Gopi';
    // console.log(lastName); // here lastName is not defined. lastname is only accessed inside innerFn.
    return function showName() { // here we are returning anonymous Fn.
        var lastName = 'Tadivaka';
        console.log(name, lastName); // Gopi Tadivaka
        // or instead we should have put return name + lastName; instead of writing the console here.
    }
}

var showFn = printName(); // here the printName fn is called and removed from the callStack so that means
// the variable name should be gone right? but i can still access the name even after the first call is done
// by re-using that fn later whenever required.
showFn(); // will print Gopi as the output because of console statement in the innerFn.


/*
* So closure is something like the even after the execution of outer fn is done the innerfn can still
* has access to that outerFn variables.
* */

// 2nd way using named Fn the previous is anonymous Fn.
var showName2 = function() {
    console.log(name); // name is not defined
};

function printName2() {
    var name = 'Gopi';
    return showName2; // we are returning innerFn which has a name. though we have used the same variable in
    // the innerFn it cant be accessed. it doesnot matter even if you call here like showName(); still the name
    // will be name is not defined.
}

var showFn = printName2();
// console.log(showFn()); // but in this case output is name is not defined.

// we can make the above thing to work by cut showName2 fn expression and paste inside the printName2 Fn
// and then return the showName2 variable then the name will print properly. the reason because this is working
// is because of the lexical scoping. the context wont be cleared after the exec is done because of this.

// 3 rd way of using naming fn inside the outerFn

function printName3() {
    var name = 'Gopi';
    function showName3() { // creating named fn inside the outerFn and returning that, here the name will be accessed.
        console.log(name); // Gopi
    }
    return showName3;
}

console.log(printName3()()); // will print Gopi because of console statement in showName.


// 4th use case

// this fn behaves like a factory of fn's

function addTwo5(x) {
    return function addTwo6(y) { // since this fn is inside the addTwo5 fn the inner fn
        // can still remember the var x even after the outer fn execution is done.
        return x + y;
    }
}

const add2 = addTwo5(2); // this behaves like a factory returns different context everytime. we can call like
// this with multiple values and it wont clash with others. so the fn below has different context
// basically we can achieve factory fn's using Closure in this way.
const add3 = addTwo5(3);

console.log(add2(5)); // 7, it still remembers x as 2
console.log(add3(5)); // 8, it still remembers x as 3

// 5th way, named fn way is also possible but the named fn should be defined inside the outerFn.

function addTwo7(x) {
    const addTwo6 = function(y) {
        return x + y;
    };
    return addTwo6;
}

const add7 = addTwo7(5);

console.log(add7(5)); // 10, it still remembers x as 5


// 6th way, not exactly closure i see this as a global varaible concept but tutorials say it as closure.

var myName =  { 'Gopi': 'kris'}; // or string

function printMyName() {
    return myName;
}

console.log(printMyName()); //{ Gopi: 'kris' } or Gopi,
// doesnot matter it is primitive or reference variable type

myName = { 'Gopi': 'krisupdated'}; // since its reassigned after the above fn call the above console log
// is dispalying the previous value and only the below will be updated. and we are re-using the same variable
// we didnt use var again here.

console.log(printMyName()); // { Gopi: 'krisupdated' }  or Gopi Krishna