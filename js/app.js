// 1. Create an object that has a property that is an array. Log one of the elements of that array.
let obj = {
  array: ['here', 'is', 'some', 'smaple', 'text']
};
console.log(obj.array[1]);

// 1. Create an object that has a property that is an object. Log one of the properties of that inner object.

let inception = {
  obj: {aProperty: 'sample text', anotherProp: 1234, prop3: 'object in an object'}
}
console.log(inception.obj.prop3)


// 1. Create an object that has a property that is a function (method).  Call that method.
let foo = {
  prop1: "this is a string",
  prop2: 1233,
  method(){
    console.log("I am a method")
  }
}
foo.method()