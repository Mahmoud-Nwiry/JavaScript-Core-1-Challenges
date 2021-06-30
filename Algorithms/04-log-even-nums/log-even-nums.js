// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    if(num > 0){
        for(let x = 0; x <= num; x+=2)
            console.log(x);
    }
};