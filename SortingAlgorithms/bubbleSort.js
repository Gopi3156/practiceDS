
//let names = ['Gopi', 'Gowthami', 'Krishna', 'Chandana'];
let names = [6,3,2];
const bubbleSort = function() {
    let swap = false;
    for(let i=0; i < names.length; i++ ) {
        console.log(i); // 0,1,2,0,1,2,0,1,2
        if(names[i] > names[i+1]) {
            console.log(swap); // false, true, false
            swap = true;
            let temp = names[i];
            names[i] = names[i+1];
            names[i+1] = temp;
            console.log(i); // 0,1,0
            console.log(names); //[ 3, 6, 2 ] [3,2,6] ,  [2,3,6]
        }
    }
    if(swap) {
        bubbleSort();
    } else {
        return names;
    }
    return names;
};

console.log(bubbleSort()); // [2,3,6]

/*
* the above solution will work for both numbers and strings. for strings as well the greater than and
* less than symbol will works perfectly.
*
* the reason why we created a temp variable is we need to swap once we push the 1st element to 0th element
* the 0th will be 1st element then if we put 0th to 1th basically we are placing the 1st element only. so
* that's the reason before replacing the 0th value we are placing that to temp.
*
* After the 1st iteration we should not return because its not fully sorted.becauase for each iteration
* we are only comparing two values the left one and right one thats the reason we created swap with false
* initially and changing the boolean to true if there are swaps if there are no swaps means that means we can
* return the array.
*
* the above is the bubble sort(https://visualgo.net/en/sorting). basically we will compare two elements
* sitting next to each other and swap if the 1st is greater than smaller continue this for 1st iteration
* we need to loop again and again untill there are no more swaps required. basically this is the worst sorting
* algorithm so this keeps on doing iteration for n for loops.
*
*
* */