// Example 1:

// Input: words = ["abc","car","ada","racecar","cool"]
// Output: "ada"
// Explanation: The first string that is palindromic is "ada".
// Note that "racecar" is also palindromic, but it is not the first.
// Example 2:

// Input: words = ["notapalindrome","racecar"]
// Output: "racecar"
// Explanation: The first and only string that is palindromic is "racecar".
// Example 3:

// Input: words = ["def","ghi"]
// Output: ""
// Explanation: There are no palindromic strings, so the empty string is returned.


var firstPalindrome = function(words) {
    let b = []
    for(let i=0;i<words.length;i++){
         let d = words[i].split('').reverse().join('')
         if(d === words[i]){
            b.push(words[i])
         }
    }
   if(b.length>0){
    return b[0]
   }else{
    return "";
   }
};
let words = ["abc","car","ada","racecar","cool"]
console.log(firstPalindrome(words))
