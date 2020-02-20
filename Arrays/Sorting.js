var numbers = [-7,-2,3,4];

// output should be squared and then sorted // [4,9,16,49];

// 1st solution. but we here we are the complexity is O(2N) but i see its O(nlogn) from internet.
var sortedArray = numbers.map(function(ele) {
    return ele * ele;
});

console.log(sortedArray.sort(function(ele1, ele2) { // [ 4, 9, 16, 49 ]
    return ele1 - ele2
}));

// 2nd Solution to try O(n) .. since the original array is sorted the left most may contain negative nnumbers
// so do the math.abs and compare the left most with right most and push the squared which is greater
// then increment the left and decrement the left.

function Sorted(input) {
    var result = [];
    var left = 0;
    var right = input.length-1;
    for (var i = input.length-1; i >= 0; i--) {
        if (Math.abs(input[left]) > input[right]) {
            result[i] = input[left] * input[left];
            left++;
        } else {
            result[i] = input[right] * input[right];
            right--;
        }
    }
    return result;
}

console.log(Sorted([-7,-2,3,4])); // [ 4, 9, 16, 49 ]


