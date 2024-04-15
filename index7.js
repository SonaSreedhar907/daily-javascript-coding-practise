//find words containing characters


var findWordsContaining = function(words, x) {
    const result =[]
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }
    return result
};
const words = ["leet","code"]
console.log(findWordsContaining(words,'e'))