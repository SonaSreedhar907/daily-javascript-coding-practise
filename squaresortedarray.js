// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]



var sortedSquares = function(nums) {
    let result = []
   for(let i=0;i<nums.length;i++){
    result.push(nums[i]*nums[i])
   }  
   return result.sort((a, b) => a - b);
};
let nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums))