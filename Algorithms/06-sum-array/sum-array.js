// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let sum = 0;
    for(let x = 0; x < arr.length; x++)
        sum += arr[x];
    return sum;
};
