console.log('Allons-y!')

// 1. Combine objects, arrays, and functions
// Create an object that has a property that is an array. Log one of the elements of that array.
let theDoctor = {
	regeneration: 'Ten',
	catchPhrase: 'Allons-y!',
	companions: ['Rose', 'Martha', 'Donna']
}

console.log("My favorite companion of " + theDoctor.regeneration + " is " + theDoctor.companions[2] + ".")

// Create an object that has a property that is an object. Log one of the properties of that inner object.
let hermione = {
	house: 'Gryffindor',
	pet: {
		name: 'Crookshanks',
		sex: 'Male',
		type: 'Fluffy ginger monster'
	},
	friends: ['Harry', 'Ron']
}

console.log(hermione.pet.name)

// Create an object that has a property that is a function (method). Call that method.
let serenity = {
	crew: 5,
	crewMembers: ['Mal', 'Jayne', 'Wash', 'Kaylee', 'Zoe'],
	peopleOnBoard: 6,
	passengers: ['Inara'],
	newPassengers: (num, name) => {
		serenity.peopleOnBoard += num;
		serenity.passengers.push(name); 
	}

}

serenity.newPassengers(1, 'River')


// 2. Combine objects, arrays, and functions
// Create a function that returns an object that has an array. Log one of the elements of that array.

let thisFunction = () => {

}

// Create an object that has a method that returns an object. Log a property of the inner object.

let thisObj = {

}

// Create an array that has a function that returns an object that has an array. Log an element of the inner array.

let thisArray = []


// 3. Create a callback
// Define two functions and set them to variables
// The second function takes a parameter
// Call the second function, passing in the variable that references the first function as the parameter
// In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function

let firstFunction = () => {
	console.log('calling the first function');
}

let secondFunction = (callFunction) => {
	callFunction();
	console.log('running the second function');
}

secondFunction(firstFunction)





