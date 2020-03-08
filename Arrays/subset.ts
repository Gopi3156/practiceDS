/*
* Finding a first array all the elements are a subset of a second array
*
* loop over each outer element and compare that with the each element in the second array,
*
* lets say compare 1st element with all the elements with the inside loop and if not found, break the loop,
* next onwards we no need to check for the remaining elements. we can break the outer loop with the help of
* variable tried return and break it didn't help. break keyword is not even recognizing.
*
* */

const first = [1,4,7];

const second = [1,2,3,4,5];

const isSubset = () => {
    let found = false;
    first.forEach((ele) => {
        if(found) return !found;
        if (!(!found && second.indexOf(ele) >= 0)) {
            found = true;
        }
    });
    return !found;
};

console.log(isSubset());