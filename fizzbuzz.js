//output numbers from 1 to x.if the number is divisible by 3,
//replace it with 'Fizz'.if it is divisible by 5, replace it with 'Buzz'.
//if it is divisible by 3 and 5 replace it with 'FizzBuzz'

var a = function(value) {
    let result = []
    for(var i = 1; i <= value; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else if (i % 5 === 0) {
            result.push('Buzz')
        }else{
            result.push(i)
        }
        
    }
    return result
 }
 
 console.log(a(15));
 