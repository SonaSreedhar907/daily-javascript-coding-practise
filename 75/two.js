//shuffle the array

//nums = [2,5,1,3,4,7]
//n = 3
//output = [2,3,5,4,1,7]


function shuffle(nums,n){
    let a =[]
   for(let i=0;i<n;i++){
   a.push(nums[i],nums[i+n])
   }
   return a
}
const nums = [2,5,1,3,4,7]
let n = 3
console.log(shuffle(nums,n))