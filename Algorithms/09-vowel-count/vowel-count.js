// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    str = str.toLowerCase();
    let sum = 0;
    for(let x = 0; x < str.length; x++){
        if(str[x] == 'a' || str[x] == 'e' || str[x] == 'i' || str[x] == 'o' || str[x] == 'u')
            sum++;
    }
    return sum;
};
