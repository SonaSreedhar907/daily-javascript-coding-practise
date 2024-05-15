var splitWordsBySeparator = function(words, separator) {
    const result = [];
   
   for (const word of words) {
       const splitWords = word.split(separator).filter(str => str !== ''); // Split the word by separator and remove empty strings
       result.push(...splitWords); // Push the split words into the result array
   }
   
   return result;
};