//find words containing characters


var findWordsContaining = function(words, x) {
    let result=[]
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result
};
const words = ["leet","cod"]
console.log(findWordsContaining(words,'e'))