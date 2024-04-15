//number of common factors


var commonFactors = function(a, b) {
   let count=0
   let c = Math.min(a,b)
   for(i=1;i<=c;i++){
     if(a%i==0 && b%i==0){
        count++
     }
     
   }
   return count

}
console.log(commonFactors(12,6))