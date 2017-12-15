// Combine objects, arrays, and functions
// COMPLETE ANY 3

// Create an object that has a property that is an array. Log one of the elements of that array.
let myObj = {
	arr: [1,2,3,4,5]
}

console.log(myObj.arr[1]);
console.log("");

// Create an object that has a property that is an object. Log one of the properties of that inner object.
let myObj2 = {
	innerObj: {
		key1: "Value1"
	}
}

console.log(myObj2.innerObj.key1);
console.log("");
// Create an object that has a property that is a function (method). Call that method.
let myObj3 = {
	myFunc: function(){
		return "hi"
	}
}

console.log(myObj3.myFunc());
console.log("");


// Combine objects, arrays, and functions more than one level deep
// COMPLETE ANY 3

// Create a function that returns an object. 
// Log a property of that object (hint: call the function and then call a property on the return value).
function objReturn(){
	return {
		key1: "value1"
	}
}

console.log(objReturn().key1)
console.log("")

// Create a function that returns an array. Log an element of the array.
function arrReturn(){
	return [1,2,3,4]
}
console.log(arrReturn()[0])
console.log("")

// Create a function that returns an object that has an array. Log one of the elements of that array.
function inceptReturn(){
	return {
		key1: [1,2,3,4]
	}
}

console.log(inceptReturn().key1[0]);
console.log("")

// Create a callback
// Define two functions and set them to variables
let func1 = ()=>{};
let func2 = (param)=>{
	param();
};
// Call the second function, passing in the variable that references the first function as the parameter
func2(func1);
// In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function

if(true){
	const a = 2 + 2;
	console.log(a);
}
if(true){
	if(false){
        	console.log('hi');
    	}
    }

// Semantic naming of variables
// Fix this variable to have a better name:

const arr = [2, 4, 6, 8, 10];

// Function definition placement
// Clean up this code, so that it works and has function definitions in the correct place


const bar = ()=>{
    console.log('bar here');
}
bar();


const foo = ()=>{
    console.log('foo here');
}
foo();

// Commenting code
// Write your own comments for each line of code:

const addTwoNums = (firstNum, secondNum)=>{ //makes the function a value of the addTwoNums variable
    const finalValue = firstNum + secondNum; // gives the variable finalValue a value of the sum of the two parameters
    return finalValue; // returns the final sum 
}


// Error reading
// What is meant by the error this produces?

// foo();

// const foo ()=>{
//     console.log('hi');
// }

// Theres nothing to start the process of giving the const variable a value of that function
