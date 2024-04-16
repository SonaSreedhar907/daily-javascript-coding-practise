//palindrome number 

// a=121
// reverse of a=121


// var palindrome = function (a){
//     const b = a.toString()
//     const c = b.split('').reverse().join('')
//     if(a==c){
//         return true
//     }
//     return false
// }
// console.log(palindrome(121))


var palindrome=function (a){
 const b=a.split('').reverse().join('')
 if(a==b){
    return true
 }
 return false
}
console.log(palindrome('racecars'))