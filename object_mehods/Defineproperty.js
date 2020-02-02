// There are two ways we can create methods directly on the array

// 1st way is Array.prototype.remove = function() {};

Array.prototype.removeElements = function (ele) { // looks like removeElement is there on the Array.prototype thats why the configurable and those
    //options come in handy to not to override the existing methods. we can pass the arguments like above. and grab the calling array values using this
    //console.log('ele', ele);
    //console.log('this', this);
    return {'ele': ele, 'this': this};
};

console.log([1, 2, 3].removeElements(1)); //{ ele: 1, this: [ 1, 2, 3 ] }


// but the above is not a good practice we can do something like this using Object.defineProperty

// makesure you are creating this in JavaScript not on th TS File.

//// we cant use the existing methods on array
Object.defineProperty(Array.prototype, "removeEle", {
    // it is saying cannot redefine property
    // so add enumerable property to true. so lets try 1st approach.
    enumerable: true,
    value: function (removeElement) { // value should be there. this is the actual value that will be returned.
        console.log(this); // this refers to the calling object. ['Ford', 'Mustang', 'Corolla'].
        console.log(this['Ford']); // undefined it should be this[index or 0] => 'Ford'.
        /*for(let key in this){ // we should not do for .. in loop on array if you concern about the ordering
            // this should be only for Object iteration mostly so use traditional for loop.
            // in case of for in loop for array here each key will be the index not the value.
            console.log(key);
            if(this[key] === removeElement){
                this.splice(key,1);
            }
        }*/

        for(var i=0; i< this.length-1; i++) {
            if(this[i] === removeElement) { // we need this if for the below mentioned comment.
                this.splice(removeElement, 1); // we can rely on splice to delete the items in a array.
            }
        }
        // this.splice(removeElement, 1); // even though if it didn't match it will take 0 as default and it will delete
        // the first value considering as (0,1). so we need to wrap if around it to look for value match.
        return this; // so here this refers to the calling object.
    }
    //writable: true
    //configurable: true
    // there are set, get and these are some properties that we can use based on our needs.
});

var cars = ['Ford', 'Mustang', 'Corolla'];
console.log(cars); //['Ford', 'Mustang', 'Corolla']

console.log(cars.removeEle('Honda')); // [ 'Ford', 'Mustang', 'Corolla' ] since honda is not there in the array


console.log(cars.removeEle('ford')); // [ 'Ford', 'Mustang', 'Corolla' ].since ford === Ford returns false type sensitive

console.log(cars.removeEle('Ford')); // [ 'Mustang', 'Corolla' ]

console.log(cars); // [ 'Mustang', 'Corolla' ] - original array is mutated.


var newCars = [1,2,3,4,5];

console.log(newCars.splice(0, 1)); // [1];

console.log(newCars); // [ 2, 3, 4, 5 ]

var newCarShowRooms = ['Honda','Nissan', 'Mazda'];

console.log(newCarShowRooms.slice(0, 1));

console.log(newCarShowRooms);



/*         ***** TakeAways  ********
* The splice() method removes the element from the original array and returns an newArray with the deleted items in array.
* The slice() method doesn't mutate the original array and returns an newArray with the deleted items in array.
*
* */
