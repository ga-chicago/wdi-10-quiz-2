// Create an object that has a property that is an array. Log one of the elements of that array.

let person= {
	arr1: ["string1", "string2"]
}

console.log(person.arr1[1]);

// Create an object that has a property that is an object. Log one of the properties of that inner object.

let obj = {
	innerObj: {
		key1: "hi",
		key2: 12
	}
}

console.log(obj.innerObj.key1);

// Create an object that has a property that is a function (method). Call that method.
// Create an array that has an object in it. Log one of the properties of that object.

let ari = [
	{
		height: "6 foot"
		weight: 190
	}
]

console.log(ari[0].weight);

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.
// Create an array that has a function as one of its elements. Call that function.
// Create an object that has a property that is an array. Loop over the array and log each individual element.
// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.