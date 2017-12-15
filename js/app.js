// COMBINE OBJECTS ARRAYS AND FUNCTIONS

// 1.

const obj1 = {
	array1: [1,2,3,4],
}
console.log(obj1.array1[2]);

// // 3.

const obj3= {
	someMethod() {
		return "This is the method from question 3"
	}
}
console.log(obj3.someMethod())

// // 4. 

const someArray = [
	someObj = {
		name: "Anthony"
	}
]
console.log(someArray[0].name)


// COMBINE OBJECTS ARRAYS AND FUNCTIONS more than one level deep


// 7.

const someObj = {
	someMethod() {
		return {
			name: "Anthony"
		}
	}
}
console.log(someObj.someMethod().name)

// // 8.

const obj8 = {
	someMethod() {
		return {
			someArray: [1,2,3,4]
		}
	}
}
console.log(obj8.someMethod().someArray[2])

// // 2.
const funct2 = () => {
	return [
		1,
		2,
		3,
	]
} 
console.log(funct2()[1])



// CREATE A CALL BACK


const funct1 = () => {
	console.log("Function 1 just ran")
}

const funct2 = (inputParam) => {
	console.log("Fucntion 2 just ran")
	inputParam()
}

// console.log(funct2(funct1))


// INDENTATION

if(true) {
	const a = 2 + 2;
	console.log(a);
}

if(true){
	if(false){
	console.log('hi');
	}
}


// Semantic naming of variables


const evensToTen = [2, 4, 6, 8, 10];


// Function definition placement

const bar = () =>{
    console.log('bar here');
}

const foo = ()=>{
    console.log('foo here');
}

bar();
foo();


// Commenting code


// Take 2 parameters that are numbers and sum them
const addTwoNums = (firstNum, secondNum)=>{
	// create a new variable finalValue that is assigned the sumer of the 2 variables
    const finalValue = firstNum + secondNum;
    //return the output11
    return finalValue;
}


// Describe some common programming principles
/* 

• Use DRY code, do not repeat youself or lines of code throughout a program
•Principle of least astonishment -- A person using or reading you code should never be surprised by an outcome. If something in the code is not clear there should be an accurate comment included to make it easier to understand
• Try to find the most simple way to complete a problem. This takes in several other principles like DRY code and KISS (keep it simple stupid)
• Don't optimize too soon. It is better to get a piece of code working and then look for improvements that to try to optimize on the fly. By combining this with avoiding adding functionality until it is necessary it will help you work through problems quicker and avoid confusion in your code

*/

// Error reading

foo();

const foo ()=>{
    console.log('hi');
}

// Uncaught SyntaxError: Missing initializer in const declaration
// I believe this is saying that missing '=' between const and foo is the issue. That needs to be there for the code to understand what variable (a function) it is looking at


// Coerce data types


const b = '5';
if(b == 5){ //will be false
    console.log('this line should execute');
}


const a = '5';
console.log(5 + parseInt(a,10));




















