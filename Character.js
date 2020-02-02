// ways to look for each character in a string

// 1st way is to convert string into array

var name = 'hello';
var loopArray = name.split('');
console.log(loopArray); // [ 'h', 'e', 'l', 'l', 'o' ], out is array of strings

// here you can use array methods if you want to do something with each character


// 2nd way is to use the charAt(index)

//var name = 'hello';
function FirstNonRepeatingCharacter(name) {
    for(i = 0; i <= name.length-1 ; i++) {
        var eachChar = name.charAt(i);
        console.log(eachChar); // h, e, l, l, o; output is each char separated by comma
        console.log(name.indexOf(eachChar));
        console.log(name.lastIndexOf(eachChar));
        // here you can use string methods if you want to do something with each character
        if(name.indexOf(eachChar) === name.lastIndexOf(eachChar)) {
            console.log(eachChar);
            return eachChar
        }
    }
    return null;
}

console.log(FirstNonRepeatingCharacter('1llo2'));