//anagram or not

function anagram(a,b){
  const c=a.split('').sort().join('')
  const d=b.split('').sort().join('')
  if(c===d){
    return true
  }
  return false
}
const a='listen'
const b='silent'
anagram(a,b)