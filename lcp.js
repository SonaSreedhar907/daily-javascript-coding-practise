//longest common prefix using sorting 

// Input: {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
// Output: “gee”

// Input: {“apple”, “ape”, “april”}
// Output: “ap”


var prefix = function(input1){
   const b = input1.sort()
   const first = b[0]
   const last = b[b.length-1]
   let prefix = ""
   const minlength = Math.min(first.length,last.length)
   for(let i =0 ;i<minlength ;i++){
    if(first[i] === last[i]){
        prefix+=first[i]
    }else{
        break
    }
   }
   return prefix
}
const input1 = ["apple","ape","april"];
console.log(prefix(input1))