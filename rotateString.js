//s = 'abcde'
//goal = 'cdeab'
//ouput = true



var rotateString = function(s,goal){
  if(s.length !== goal.length){
    return false
  }
  return (s+s).includes(goal)
}
const s ='abcde'
const goal = 'cdeeb'
console.log(rotateString(s,goal))