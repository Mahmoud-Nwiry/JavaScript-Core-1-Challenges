// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let max = arr[0];
    for(let x = 0; x < arr.length; x++){
        if(arr[x] > max)
            max = arr[x];
    }
    return max;
};
