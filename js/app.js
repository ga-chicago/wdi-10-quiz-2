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





















