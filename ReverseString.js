// Questions on String

var strings = 'hellooo';
var strings = strings.split('');
strings.forEach(function (value, index, array) {
    console.log(value);
});

// Decremental for loop to reverse a string. 1st way

var newString = '';
for(var i = strings.length-1; i >=0; i--) {
    newString += strings[i];
    console.log(newString);
}

// 2nd way of reversing a string. convert to array and reverse and then join bby space.

var strings = 'helllooo';
var strings = strings.split(''); // split returns array of characters.
//console.log(strings); // [ 'h', 'e', 'l', 'l', 'l', 'o', 'o', 'o' ]
//console.log(strings.reverse()); //[ 'o', 'o', 'o', 'l', 'l', 'l', 'e', 'h' ]
console.log(strings.reverse().join(''));// ooollleh, if space is not provided default is separated by
// comma operator.

// 3rd way by doing recursion
var newS='';
function reverseString(str) {
    console.log(str);
    if (str === "") {
        console.log(str);
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseString('hello')); // olleh
console.log(newS);

var name = 'names';
console.log(name.charAt(0));


// 4th way using pop method
var strings = 'hellooo';
var stringsArray = strings.split(''); // return array of chars
var newArray = [];
for(i=strings.length ; i>=0; i--) { // initialize with string length and decrement
    newArray.push(stringsArray.pop());// for each iteration it will remove the last item in array
}
console.log(newArray.join('')); // ooolleh
console.log(stringsArray);// []. original array will be mutated.


