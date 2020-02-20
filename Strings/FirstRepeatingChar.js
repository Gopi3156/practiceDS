function Recurring(str) {
    for(var i =0; i <= str.length-1; i++) {
        console.log(str[i]);
        if(str.indexOf(str[i]) !== str.indexOf(str[i], i)) {
            return str[i];
        }
    }
}

console.log(Recurring('hello')); //l