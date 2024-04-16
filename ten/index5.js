//check if two strings are equalent

//word1 = abc  (join(''))
//word2 = abc  (join(''))

var arrayStringsAreEqual = function(word1, word2) {
   var d=word1.join('')
   var e=word2.join('')
   if(d==e){
      return true
   }
   return false
};
const word1 = ["ab", "c"]
const word2 = ["a", "bc"]

console.log(arrayStringsAreEqual(word1,word2))