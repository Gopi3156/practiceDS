/*
* trying to layout all the use cases of closures in JavaScript.
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
