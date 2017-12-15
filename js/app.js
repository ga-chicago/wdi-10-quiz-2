// COMBINE OBJECTS ARRAYS AND FUNCTIONS

// 1.

// const obj1 = {
// 	array1: [1,2,3,4],
// }
// console.log(obj1.array1[2]);

// // 3.

// const obj3= {
// 	someMethod() {
// 		return "This is the method from question 3"
// 	}
// }
// console.log(obj3.someMethod())

// // 4. 

// const someArray = [
// 	someObj = {
// 		name: "Anthony"
// 	}
// ]
// console.log(someArray[0].name)


// COMBINE OBJECTS ARRAYS AND FUNCTIONS more than one level deep


// 7.

// const someObj = {
// 	someMethod() {
// 		return {
// 			name: "Anthony"
// 		}
// 	}
// }
// console.log(someObj.someMethod().name)

// // 8.

// const obj8 = {
// 	someMethod() {
// 		return {
// 			someArray: [1,2,3,4]
// 		}
// 	}
// }
// console.log(obj8.someMethod().someArray[2])

// // 2.
// const funct2 = () => {
// 	return [
// 		1,
// 		2,
// 		3,
// 	]
// } 
// console.log(funct2()[1])



// CREATE A CALL BACK


// const funct1 = () => {
// 	console.log("Function 1 just ran")
// }

// const funct2 = (inputParam) => {
// 	console.log("Fucntion 2 just ran")
// 	inputParam()
// }

// console.log(funct2(funct1))


// INDENTATION

// if(true) {
// 	const a = 2 + 2;
// 	console.log(a);
// }

// if(true){
// 	if(false){
// 	console.log('hi');
// 	}
// }


// Semantic naming of variables


// const evensToTen = [2, 4, 6, 8, 10];


// Function definition placement

const bar = () =>{
    console.log('bar here');
}

const foo = ()=>{
    console.log('foo here');
}

bar();
foo();



























