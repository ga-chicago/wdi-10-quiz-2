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
