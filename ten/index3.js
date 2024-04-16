//number of common factors

//a=12
//b=6
//common factors are 1,2,3,6 ans is 4


var commonfactors = function(a,b){
   let count=0
   const c=Math.min(a,b)
   for(let i=1;i<=c;i++){
      if(a%i==0 && b%i==0){
         count++
      }
   }
   return count
}
console.log(commonfactors(12,6))