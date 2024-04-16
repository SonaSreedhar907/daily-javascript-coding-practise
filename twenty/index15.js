//return the number of vowels in a string

function vowels(string){
   let count=0
  let vowels=['a','e','i','o','u']
  for(let i of string.toLowerCase()){
    if(vowels.includes(i)){
        count++
    }
  }
  return count
}
console.log(vowels('sona'))