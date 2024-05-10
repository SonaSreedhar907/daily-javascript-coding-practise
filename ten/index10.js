//longest word in the sequence

// var longest = function(a){
//     let b=a.split(' ')
//     let c=b[0]
//     for(i=0;i<b.length;i++){
//       if(b[i].length>c.length){
//         c=b[i]
//       }
//     }
//     return c
// }

var longest = function(a){
  const b = a.split(' ')
  let longest = b[0]
  for(i=1;i<b.length;i++){
    if(b[i].length>longest.length){
      longest = b[i]
    }
  }
  return longest
}

console.log(longest('i am sona sreedhar'))