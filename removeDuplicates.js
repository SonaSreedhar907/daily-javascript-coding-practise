//tuff to me

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0; // If the array is empty, return 0

    let uniqueCount = 1; // Start with assuming the first element is unique

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueCount] = nums[i]; // Move the unique element to the front
            uniqueCount++; // Increment the count of unique elements
        }
    }

    return uniqueCount; // Return the count of unique elements
};

// Test cases
let nums1 = [1, 1, 2];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums1)); // Output: 2, nums = [1, 2, _, _, _, ...]
console.log(removeDuplicates(nums2)); // Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, ...]
