console.log('Allons-y!')

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