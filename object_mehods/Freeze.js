// Using Object.freeze() method;

var obj = {name: 'Gopi', name2: 'krishna'};
console.log(obj);//{ name: 'Gopi', name2: 'krishna' }

// lets freeze it so that none of updates, deletes will work on those props.

Object.freeze(obj);

obj.name = 'updating'; // you didn't see any errors. it will be silent but it wont update it.

console.log(obj); // { name: 'Gopi', name2: 'krishna' }.

delete obj.name; // It can't delete it as well

console.log(obj); //{ name: 'Gopi', name2: 'krishna' }

// But this wont work on array

var arrayObj = [{name: 'Gopi'}];

Object.freeze(arrayObj);

arrayObj[0].name = 'update';

console.log(arrayObj); // [ { name: 'update' } ]. so this wont work on collections.
