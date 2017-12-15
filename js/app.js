// Create an object that has a property that is an array. Log one of the elements of that array.


let objectWithArray = {
  array: ["firstElement", "secondElement", "thirdElement"]

}
console.log(objectWithArray.array[1]);

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.

let arrayWithArray = [["firstElement", "secondElement"], "second element", "third element"]

console.log(arrayWithArray[0][1]);

// Create an object that has a property that is an object. Log one of the properties of that inner object.

let objectWithObject = {
  firstElement: {
                firstInnerElement: "firstInnerValue",
                secondInnerElement: "secondInnerValue"
                },
  secondElement: "Second Value"
}

console.log(objectWithObject.firstElement.secondInnerElement)


//Create a function that returns an array. Log an element of the array.

let returnArray = () => {
  return ["firstElement", "secondElement", "thirdElement"]
}
console.log(returnArray()[2])

// Create a function that returns a function. Call that inner function

let functionWithInnerFunction = () => {
  let innerFunction = () => {
    console.log("innerFunction output");
  }
  return innerFunction();
};
functionWithInnerFunction()

// Create an array that has a function that returns a function. Call the inner function.

let arrayWithFunction = ["firstElement", function functionWithInnerFunction() {
  let innerFunction = () => {
    console.log("innerFunction in a function in an array output");
  }
  return innerFunction();
}, "third element"]

arrayWithFunction[1]();
