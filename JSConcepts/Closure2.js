// few more scenarios of closures.

let name = 'Gopi';

const fn = () => {
    // let name = 'Gopi Krishna';
    console.log(name); // Gopi, since let is block scoped not fn level scope it is available here.
};
console.log(name); // Gopi
console.log(fn()); // will print Gopi in the console.

// scene 2

if(true) { // since let is block scoped varaible so the fn that is trying to access the let variable
    // from outside cant access if you acces from outside thats why only inside fn with in the if block is
    // able to access it.
    let city = 'Hyderabad';

    const fn = () => {
        return city;
    }

    console.log(fn()); // Hyderabad
}

console.log(fn()); // undefined. but it is getting undefined not the reference error needs to see why.
// because the variables declared with let wont be hoisted.

// 7 th way of using closure, this is basically the same way except using let and arrow fns

const outerFn = () => {
    let name = 'krishna';
    let next = 'Tadivaka';
    return () => {
        return name; // since we are not using next in inner fn, the inner fn wont remember the next variable and
        // it wont the next variable as closure.
    }
};
// if we do console.dir(outerFn) and go to the Functions and see closure you will only see the name varaible
// not the next variable because of the above reason.
console.log(outerFn()()); // krishna


// 8 th way of using closures in for loop. closures has some realtion with var and let keywords.

for(var i=0; i < 4; i++ ) {
    console.log(i); // 0,1,2,3
}

for(var i =0; i< 4; i++) {
    const fn = () => {
        console.log(i); // 0,1,2,3
    }
    fn();
}

for(let i =0; i< 4; i++) {
    const fn = () => {
        console.log(i); // 0,1,2,3
    }
    fn();
}

// let use fn with in a fn. simulate this with a setTimeout Fn


// using var keyword approach
for(var i =0; i< 4; i++) {
    setTimeout(() => {
        console.log(i); // 4,4,4,4
    }, 1000)
    // everytime the loop iterates over

    // 1st time var i = 0; Closure( i =0 )
    // 2nd time var i =1; Closure(i =1, the value is re-assigned to 1 so the closure is updated to 1 so the previous
    // iteration also gets updated. so everytime we have the same for loop with variable re-assign
    // 3rd iteration same scenario and all the previous iteration are re-assigned back to 3;
    // 4th iteration it will check 4<4 means i= 4; then 3,3,3 will be changed to 4,4,4,4 its working same like
    // the reference.
}

// using let keyword approach to sovle the above problem
for(let i =0; i< 4; i++) {
    setTimeout(() => {
        console.log(i); // 0,1,2,3
    }, 1000)
    // since it is let keyword i initially will be 0 since let is a block scope since a new varaible is
    // created next time it will be 1 and so on and thatwhy it is printing correctly.
}

// another way to solve the above case without using let is by using IIFE, which will create
// a block kind of scope

for(var i =0; i< 4; i++) {
    ((i) => setTimeout(() => { // see we are passing i here and in the bottom if we didnt pass it will print again
        // 4,4,4,4.
        console.log(i); // 0,1,2,3
    }, 1000))(i);
    // since it is let keyword i initially will be 0 since let is a block scope since a new varaible is
    // created next time it will be 1 and so on and thatwhy it is printing correctly.

    // because of IIFE getting called immediately for every iteration even by using var everytime a new scope is getting
    //created and the new value is coming.
}