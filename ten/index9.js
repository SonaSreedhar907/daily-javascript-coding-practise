//remove duplicates in an array

var duplicates=function(a){
  let b = [...new Set(a)]
  return b
}
const a=['b','c','d','d']
console.log(duplicates(a))

