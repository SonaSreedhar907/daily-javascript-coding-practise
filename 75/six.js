// reverse words in a string


// Input: s = "the sky is blue"
// Output: "blue is sky the"


var reverseWords = function(s) {
    let b = s.split(" ")
    b.reverse()
    return b.join(' ')
};
let s = "the sky is blue"
console.log(reverseWords(s))