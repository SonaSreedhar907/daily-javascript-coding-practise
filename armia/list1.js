//from a list of numbers move zero to the end of the list

// input =[1,0,2,0,4,6]
//output =[1,2,4,6,0,0]


var a = function (input){
   const c = input.filter(n=>n!==0)
   const d = input.length - c.length
   for(i=1;i<=d;i++){
      c.unshift(0)
   }
   return c
}
const input = [1,0,2,0,4,6]
console.log(a(input))


