// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    if(num > 0){
        for(let x = num; x>0;x--)
            console.log(x);
    }
};
