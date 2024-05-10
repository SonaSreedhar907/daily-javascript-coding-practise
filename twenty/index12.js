//given number is prime or not

function prime(num){
   for(i=2;i<=num/2;i++){
     if(num%i === 0){
      return true
     }else{
      return false
     }
   }
}
console.log(prime(7))