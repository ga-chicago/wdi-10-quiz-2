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


const anArr = [{
	objProp: 'Michael'
}];

console.log(anArr[0].objProp);