var first = [1, 2, 3, 4,5];
var second = [1, 2];
//var newArray = [];


var findingDiffCharacter = function () {
    first.forEach(function (value, index) {
        second.forEach(function (value2) {
            if (value === value2) {
                console.log("index", index, "first", first, "value", value);
                delete first[index]; // use array.filter instead of using delete because it will add a empty value still at the deleted index position.
                //first.splice(index,1); //https://stackoverflow.com/questions/21811630/splicing-a-javascript-array-from-within-the-callback-passed-to-foreach
                // https://gist.github.com/chad3814/2924672
                console.log(first);
            }
        });
    });
    return first.join(''); // Removing commas from the array [, , ,4] = > 4. but we need join('') empty strings are required here.
};

// see this why splice is not working in a forEach function in Javascript. https://gist.github.com/chad3814/2924672

// so use traditional for loop.

// use set two compare the differences between two arrays because its O(n square) if comparing two arrays. instead convert array to set and
//find the difference.

console.log(findingDiffCharacter());