// Create an object that has a property that is an array. Log one of the elements of that array.


let objectWithArray = {
  array: ["firstElement", "secondElement", "thirdElement"]

}
console.log(objectWithArray.array[1]);

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.

let arrayWithArray = [["firstElement", "secondElement"], "second element", "third element"]

console.log(arrayWithArray[0][1]);

// Create an object that has a property that is an object. Log one of the properties of that inner object.

let objectWithObject = {
  firstElement: {
                firstInnerElement: "firstInnerValue",
                secondInnerElement: "secondInnerValue"
                },
  secondElement: "Second Value"
}

console.log(objectWithObject.firstElement.secondInnerElement)


//Create a function that returns an array. Log an element of the array.

let returnArray = () => {
  return ["firstElement", "secondElement", "thirdElement"]
}
console.log(returnArray()[2])

// Create a function that returns a function. Call that inner function

let functionWithInnerFunction = () => {
  let innerFunction = () => {
    console.log("innerFunction output");
  }
  return innerFunction();
};
functionWithInnerFunction()

// Create an array that has a function that returns a function. Call the inner function.

let arrayWithFunction = ["firstElement", function functionWithInnerFunction() {
  let innerFunction = () => {
    console.log("innerFunction in a function in an array output");
  }
  return innerFunction();
}, "third element"]

arrayWithFunction[1]();

//Define two functions and set them to variables
//The second function takes a parameter
//Call the second function, passing in the variable that references the first function as the parameter
//In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function


let function1 = () => {
  console.log("function callback success");
}
let function2 = (param) => {
  return param();
}
function2(function1);

Correctly indent the following code:

if(true){
    const a = 2 + 2;
    console.log(a);
        }
if(true){
  if(false){
    console.log('hi');
  }
}

//Semantic naming of variables

//Fix this variable to have a better name:

const arrayOfEvens = [2, 4, 6, 8, 10];

Function definition placement

Clean up this code, so that it works and has function definitions in the correct place

bar();
const bar = ()=>{
    console.log('bar here');
}
foo();

const foo = ()=>{
    console.log('foo here');
}
