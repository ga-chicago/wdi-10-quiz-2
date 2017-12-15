// //1 object with array property
// let myObject = {
//     thisKey: [1,2,3,4]
// };
// console.log(myObject.thisKey[0]);
//
// //2 object with inner object
// let obj = {
//     good: {
//         bad: "great"
//     }
// };
// console.log(obj.good.bad);
//
// // 3
// let otherObj = {
//     doSomething: function (){
//         console.log("this is a function");
//     }
// };
// otherObj.doSomething();
//
// //4 array with object
// let myArray = [
//     {cool: "stuff"}
// ];
// console.log(myArray[0]);
//
// //5 array with array
// let otherArr = [
//     [1,2,3]
// ];
// console.log(otherArr[0][1]);
//
// // 6
// let arr = [1,2, function(){console.log("this is an array function")}];
// arr[2]();
//
// //7
// let objArr = {
//     [1,2,3,4]
// };
// for(i=0; i < objArr.length; i++){
//     console.log(objArr[0])
// }
//
// //8 moving on
// let array1 = [["a", "b", "c"]];
// for(i=0; i < array1.length; i++){}

/* create callback */
//
// let abc = function (){
//     console.log("hi");
//     param();
// };
// let zyx = function (param){
//     console.log("bye");
// };
// abc(zyx());

// ///// indent ///
// if (true) {
//     const a = 2 + 2;
//     console.log(a);
// }
//
// if (true) {
//     if (false) {
//         console.log('hi');
//     }
// }
// // Semantic
// const evenNumbers = [2, 4, 6, 8, 10];
//
// // Function def placement
//
// const bar = ()=> {
//     console.log('bar here');
// }
//
//
// const foo = ()=> {
//     console.log('foo here');
// }
// bar();
// foo();
//
// // // comments //
// // should do -> add any two numbers you pass into parentheses as an argument when you call the function
// const addTwoNums = (firstNum, secondNum)=>{
//     // the final value is th fist number plus the second number
//     const finalValue = firstNum + secondNum;
//     // return the sum value and stop the function
//     return finalValue;
// }


// missing initializer means that your variable is not assigned to anything
// to fix it needs an assignment operator after the variable name to be able to be initialized and referenced
// also the function can't be called before the function declaration
// because the code is read from top to bottom 

const foo = ()=>{
    console.log('hi');
}
foo();















