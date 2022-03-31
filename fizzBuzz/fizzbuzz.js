// check if given number is divisible by 2 and 3 first just in case we need to print out fizzbuzz.


function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {

    if(i % 2 === 0 && i % 3 === 0)
console.log("Fizz Buzz");
else if(i % 3 === 0 )console.log("Buzz");
else if( i % 2 ===0 )console.log("Fizz");
else console.log(i);
  }
}

fizzBuzz(6)
