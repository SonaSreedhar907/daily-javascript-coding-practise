//longest word in the sequence

var longest = function(a){
    let b=a.split(' ')
    let c=b[0]
    for(i=0;i<b.length;i++){
      if(b[i].length>c.length){
        c=b[i]
      }
    }
    return c
}
console.log(longest('i am sona sreedhar'))