//remove duplicate elements in an array

var duplicates = function(a){
  const b=[]
  for(let i=0;i<a.length;i++){
    if(b.indexOf(a[i])===-1){
        b.push(a[i])
    }
  }
  return b
}
var a=[22,1,22,3,4]
console.log(duplicates(a))