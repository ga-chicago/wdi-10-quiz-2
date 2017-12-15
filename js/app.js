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
		height: "6 foot",
		weight: 190
	}
]

console.log(ari[0].weight);

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.
// Create an array that has a function as one of its elements. Call that function.
// Create an object that has a property that is an array. Loop over the array and log each individual element.
// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.


//!!!!!!!!!!!!!!!!!!    Problem 2    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Create a function that returns an object. Log a property of that object (hint: call the function and then call a property on the return value).
// Create a function that returns an array. Log an element of the array.

let getArr = () => {
	return {
		player: ["Rambo", "Jordan", "Rod"]
	}
}

console.log(getArr().player[1]);

// Create a function that returns an object that has an array. Log one of the elements of that array.
// Create a function that returns an object that has an object. Log one of the properties of the inner object.

let goGetObj = () => {
	return {
		outside: "hi",
		inside: {
			prop1: "hi my name is prop1",
			prop2: "hi my name is prop2",
			prop3: "hi my name is prop3",
		}
	}
}

console.log(goGetObj().inside.prop2);
// Create a function that returns an object that has a method. Call that inner function (method).
// Create a function that returns a function. Call that inner function

let mainFunk = () => {
	return () => {
		console.log("Hey you found your innerFunk!");
	}
}

mainFunk()()

// Create an object that has a method that returns an object. Log a property of the inner object.
// Create an object that has a method that returns an object that has an array. Log an element of that array.
// Create an object that has a method that returns an object that has an object. Log a property of the inner object.
// Create an object that has a method that returns an object that has another method. Call the inner method.
// Create an object that has a method that returns a function. Call that function.
// Create an array that has a function that returns an object. Log a property of the object.
// Create an array that has a function that returns an object that has an array. Log an element of the inner array.

// !!!!!!! Repeat !!!!!!!   I don't know exactly how to catagorize this because the array is stated as a property in an object...

let getArr2 = () => {
	return {
		player: ["Rambo", "Jordan", "Rod"]
	}
}

console.log(getArr2().player[2]);



// Create an array that has a function that returns an object that has an object. Log a property of the inner object.
// Create an array that has a function that returns an object that has a method. Call that method.
// Create an array that has a function that returns a function. Call the inner function.


//!!!!!!!!!!!!!!!!!!    Problem 3    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let funky1 = () => {
	console.log("funky1");
}

let sneaky = funky1();

let funky2 = (func) => {
	console.log("funky2");
	console.log("this isn't running backwards");
	console.log("the return runs first i guess");
	return func
}

funky2(sneaky);

funky2(funky1());

