// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(arr) {
    for(let x = 0; x < arr.length; x++ ){
        if(arr[x] % 3 == 0 && arr[x] % 5 == 0)
            console.log("Fizz Buzz");
        else if(arr[x] % 5 == 0)
            console.log("Buzz");
        else if(arr[x] % 3 == 0)
            console.log("Fizz");
        else
            console.log(arr[x]);
    }
};
