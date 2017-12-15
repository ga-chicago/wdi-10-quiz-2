//Create an object that has a property that is an array. Log one of the elements of that array.

const myObj = {
	one: 1,
	arr: [1,2,3,4]
}

// console.log(myObj.arr[2]);


//Create an object that has a property that is a function (method). Call that method.

const funObj = {
	sayHello() {
		return 'hello';
	}
}

// console.log(funObj.sayHello());


//Create an array that has an object in it. Log one of the properties of that object.

const anArr = [{
	objProp: 'Michael'
}];

// console.log(anArr[0].objProp);


//COMMIT 1


//Create a function that returns an array. Log an element of the array.

let myFunc = () => {
	return [1,2,3];
};

// console.log(myFunc()[1]);


// Create a function that returns an object that has an array. Log one of the elements of that array.

const anotherFunc = () => {
	return {
		arrProp: [1,2,3,4]
	}
};

// console.log(anotherFunc().arrProp[3]);


//Create a function that returns a function. Call that inner function

const inceptionFunction = () => {
	return () => {
		console.log('BRRREEEEUUUUAHHAHHHAH');
	}
}

// inceptionFunction()();


//COMMIT 2


const funcA = () => {
	return 'michael\'s quiz';
}

const funcB = (param) => {
	console.log(param());
}

// funcB(funcA);


//COMMIT 3


if (true) {
    const a = 2 + 2;
	// console.log(a);
}

if (true) {
	if (false) {
    	console.log('hi');
    }
}


//COMMIT 4


const evenNumArray = [2, 4, 6, 8, 10];


//COMMIT 5


const bar = ()=>{
    console.log('bar here');
}

const foo = ()=>{
    console.log('foo here');
}

// bar();
// foo();


//COMMIT 6


//a function that takes two parameters, each of them numbers
const addTwoNums = (firstNum, secondNum)=>{
	//declares a variable that is equal to the sum of the two passed numerical parameters
    const finalValue = firstNum + secondNum;
    //returns the declared variable containing the sum of the parameters
    return finalValue;
}


//COMMIT 7


//Some common programming principles include:

//Writing DRY code, which stands for Don't Repeat Yourself! An important part of keeping your code readable and efficient, writing DRY code means to minimize repition of functions within a program.

//The abstraction principle is related to DRY code, but focuses more specifically on minimizing duplicating of code throughout your program by means of abstraction. Abstraction is a technique for arranging complex systems to obscure information or processes unnecessary to the intended functionality.

//KISS! This applies across all walks of life but is particularly present in programming. It means Keep It Simple, Stupid, and it's quite literal. Choose the simplest possible method for achieving your intention.

//Writing code for the maintainer is a principle wherein you recognize that although you may be the maintainer of your code, you should still write it as though it was written for a stranger to interpret, because future you is unlikely to remember all the details of what you have written


// foo();

// const foo ()=>{
//     console.log('hi');
// }

//Missing initializer in const declaration means you forgot to use an assignment operator (=) to assign the function to the const


//COMMIT 8


//Coerce data types

const b = '5';

if(parseInt(b) === 5){ //will be false
    console.log('this line should execute');
}



const a = '5';
console.log(5 + parseInt(a));


//COMMIT 9 









