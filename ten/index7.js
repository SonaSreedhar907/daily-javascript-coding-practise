//find words containing characters


var findWordsContaining = function(words,x){
    let result = []
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result
}
const words = ['leet','codxe']
console.log(findWordsContaining(words,'x'))


