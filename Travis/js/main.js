// Create an object that has a property that is an array. Log one of the elements of that array.
	
	myObj={
		myObjArray:["one","two","three"]
	}

	console.log(myObj.myObjArray[2])

// Create an object that has a property that is an object. Log one of the properties of that inner object.

	myObjTwo = { 
		property1:{
			otherProp1 : 50,
			otherProp2	: 60
		}
	}

	console.log(myObjTwo.property1.otherProp1)

// Create an object that has a property that is a function (method). Call that method.

	myObjThree = {
		myFunct:()=>{
			console.log("MyFunctionIsWorking");
		}

	}

	myObjThree.myFunct();

// Create an array that has an object in it. Log one of the properties of that object.

	myArray=[
		
		myObjFour = {property1: 100, property2: 200}
	]

	console.log(myArray[0].property1)

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.

	myArrayTwo=[
		myArrayThree = ["property1", "property2",]
	]

	console.log(myArrayTwo[0][1])

// Create an array that has a function as one of its elements. Call that function.

	myArrayThree=[
			100,
			50,
			myFunct=()=>{
			console.log("MyOtherFunctionIsWorking");
		}
		]

	 myArrayThree[2];
	console.log(myArrayThree[2])
// Create an object that has a property that is an array. Loop over the array and log each individual element.
// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.
// Bonus: make each element of the outer array an array as well. Using two for loops, loop over each array in the outer array and log those elements.


























