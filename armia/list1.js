//from a list of numbers move zero to the end of the list

// input =[1,0,2,0,4,6]
//output =[1,2,4,6,0,0]


var a=function (arr){
 const nonzero=arr.filter(num=>num!==0)
 const zero = arr.length-nonzero.length
 for(i=1;i<=zero;i++){
    nonzero.push(0)
 }
 return nonzero
}
const input =[1,0,2,0,4,6]
console.log(a(input))