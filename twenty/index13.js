//factorial of a number

function factorial(n){
   if(n===0){
    return 1
   }
   let fact = 1
   for(i=1;i<=n;i++){
    fact*=i
   }
   return fact
}
console.log(factorial(5))

