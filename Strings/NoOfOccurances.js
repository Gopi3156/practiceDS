//var str = 'lolol';
var findString = 'lol';

//console.log(str.indexOf('lol'));

var counter = 0;

function Finding(str) {
    console.log(counter);
    //for(var i=0; i < str.length; i++) {
    var first = str.indexOf(findString);
    var last = str.lastIndexOf(findString);
    if(first === last) { // means there is only one occurrence in a string.
        counter++;
        //console.log("None Found");
        return counter;
    } else {
        counter++;
        console.log(counter);
        var str = str.slice((first + findString.length- 1)); // to splice a string based on indexes.
        // we cant use splice on a string. it is only for arrays. and splice wont modify the original input.
        // we cant use splice, because it uses string as a delimeter to split the input, not the indexes tp split.
        console.log(str);
        return Finding(str);
    }
}

console.log(Finding('lololol')); // 3
console.log(Finding('lololol')); // If we call sicne its a global variable it will sum the previous as well.
// so we will get 6 as output. we need to solve this global variable problem.
//console.log(Finding('lololololol'));

//console.log('hello'.indexOf('h', 1));