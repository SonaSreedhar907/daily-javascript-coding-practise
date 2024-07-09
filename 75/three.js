//number of good pairs


function pairs(input){
    let count=0
   for(let i=0;i<input.length;i++){
    for(let j=i+1;j<input.length;j++){
      if(input[i]==input[j]){
        count+=1
      }
    }
   } 
   return count
}
const input = [1,2,3]
console.log(pairs(input))