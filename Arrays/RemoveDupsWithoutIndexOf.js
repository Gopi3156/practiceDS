Array.prototype.unique = function() {
    var a = this;
    a
    for(var i=0; i < a.length; i++) {
        console.log(i);
        for(var j=i+1; j<a.length; j++) {
            console.log(j);
            if(a[i] === a[j])
            // console.log(a);
                console.log(j);
            console.log(a[j]);
            console.log(i);
            j--;
            a.splice(i, 1);
            console.log(a);
        }
    }

    return a;
};

var array1 = ["Gopi","Gopi"];
var array2 = [ "Gopi"];
// Merges both arrays and gets unique items
console.log(array1.concat(array2));
var array3 = array1.concat(array2).unique();
console.log(array3);