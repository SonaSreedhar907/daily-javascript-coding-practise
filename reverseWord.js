// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"


function reverseWords(s){
    const b = s.split(' ')
    const c =b.map((n)=>{
        return n.split('').reverse().join('')
    })
    return c.join(' ')
}
Input: s = "Let's take LeetCode contest"
console.log(reverseWords(s))