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
		//actually would like to know how to call this function
	//  myArrayThree[2];
	// console.log(myArrayThree[2])

// Create an object that has a property that is an array. Loop over the array and log each individual element.

// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.
// Bonus: make each element of the outer array an array as well. Using two for loops, loop over each array in the outer array and log those elements.


// Create a function that returns an object. Log a property of that object (hint: call the function and then call a property on the return value).
	
	myFunct=()=>{
		return {myObj:{ 1:"one",2:"two",3:"three"}
			}
	}
	console.log(myFunct().myObj[1])

// Create a function that returns an array. Log an element of the array.

	myFunctTwo=()=>{
		return {myArray:["one","two","three"]
			}
	}
	console.log(myFunctTwo().myArray[0])

// Create a function that returns an object that has an array. Log one of the elements of that array.
	
	myFunctThree=()=>{
		return {myObj: {myObjArray:["one","two","three"]}
			}
	}
	console.log(myFunctThree().myObj.myObjArray[0])


// Create a function that returns an object that has an object. Log one of the properties of the inner object.
// Create a function that returns an object that has a method. Call that inner function (method).
// Create a function that returns a function. Call that inner function
// Create an object that has a method that returns an object. Log a property of the inner object.
// Create an object that has a method that returns an object that has an array. Log an element of that array.
// Create an object that has a method that returns an object that has an object. Log a property of the inner object.
// Create an object that has a method that returns an object that has another method. Call the inner method.
// Create an object that has a method that returns a function. Call that function.
// Create an array that has a function that returns an object. Log a property of the object.
// Create an array that has a function that returns an object that has an array. Log an element of the inner array.
// Create an array that has a function that returns an object that has an object. Log a property of the inner object.
// Create an array that has a function that returns an object that has a method. Call that method.
// Create an array that has a function that returns a function. Call the inner function.





// Define two functions and set them to variables
// The second function takes a parameter
// Call the second function, passing in the variable that references the first function as the parameter
// In the definition of the second function, invoke (call) the parameter that is being passed into it. Remember, this parameter is a function
	myFunctFour=()=>{
		console.log("It's Alive!!")
	}
	myFunctFive=(parm)=>{
		parm
	}

	myFunctFive(myFunctFour())




// Correctly indent the following code:

	if(true){
		const a = 2 + 2;
		console.log(a);
    }

    if(true){
	if(false){
        console.log('hi');
    	}
  	}



// Fix this variable to have a better name:

const numArray = [2, 4, 6, 8, 10];











