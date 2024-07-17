// move all zeroes to the start


function zeros(input){
    let low = 0;
   for(let i=0;i<input.length;i++){
        if(input[i]==0){
            [input[i], input[low]] = [input[low], input[i]];
            low++
        }
   }
   return input
}
let input = [1,0,5,6,0,3,0,0]
console.log(zeros(input))


