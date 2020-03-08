/*

                    Ways of removing an elements/elements from a array.

* 1. pop method, pop() ->>> no args required. it will remove the element from the last position of the array.
*
*    Mutation: original array will be mutated.
*    pop use cases:
*       case 1 : use this with for loop to reverse the elements of an array.
*
* 2. shift method ->>> shift method is used to remove the elements from the start. similarly like pop we can use
*    this with in a for loop to remove the elements from the start of the array.
*
*    Mutation: original array will be mutated.
*
*    shift use cases: To remove the elements from the start of the array.
*
*   Slice is not used to remove the elements from a array. it just used to slice a part of the array.
* 3. slice ->>> slice is return the values in a array from specific indices to up to specific indices.
*       end argument is optional if we didn't provide the second argument it will consider to the end of the array.
*
*    Arguments: both the start and end are optional.
*       a. if we didn't provide both args then a shallow copy is created.
*       b. if we didn't provide the second arg then it will return the array from the start to the end.
*
*    Mutation: it wont mutate the array.
*
*    slice use cases:
*       case 1: to create a shallow copy, deep copy is not possible. means we can create a new array from the
*           original array with out references getting copied.
*       case 2: to create subsets from a array(means slicing the array).
*
*    we can't use slice on objects. this work only on arrays.
*
* 4. splice method is used to delete the elements from the array from the specific index with specifying the
*       delete count. it will be used to insert the elements as well
*
*   Mutation: It will mutate the original array.
*
*   look into splice.ts file for more details.
*
*
*  5. we can also remove the elements from the array by resetting the length on the array
*
*   this will remove the elements from the end of the array.
*
*  Mutation: it deletes the original array.
*
*
* */

let array = [1,2,3,4];
// cannot redeclare block scoped variable. its not error but IDE's will complain about it. its a typescript feature
//File has been declared as a module and have its own scope.
// File has been declared as a script and share the global scope with other scripts.
array.length = 2;

console.log(array); // [1,2], here the remaning elements are deleted.


/*
* 6. array.filter ->
*
*
*
* */
