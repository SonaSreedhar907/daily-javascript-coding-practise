//create hello world function 

// var createHelloWorld = function(){
//     return function(...args){

//     }
// }
// console.log(createHelloWorld())




// var createHelloWorld = function(){
//    return function(...args){   //spread
//      return args
//    }
// }
// const f = createHelloWorld()
// console.log(f("hello"))



var createHelloWorld = function(){
  return function(){
   return "hello sona sreedhar"
  }
}
const f = createHelloWorld()
console.log(f())