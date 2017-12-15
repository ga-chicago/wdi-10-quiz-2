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


// Combine objects, arrays, and functions more than one level deep
// 1. Create an array that has a function that returns an object that has an object.  Log a property of the inner object.

let funarr = [
  1,
  'ghost',
   () => {
    return {
      prop: 'here',
      this: 'is confusing',
      object: {
        moreProps: 'an object nested in an object nested in a function nested in an array. confused yet?'
      }
    }
   }]

  funarr[2]().object.moreProps


// 1. Create an array that has a function that returns an object that has an array.  Log an element of the inner array.
let array = [
  'hey',
  () => {
    return {
      whoa: 'there',
      hey: ['this', 167, 'now']
    }
  }
]
console.log(array[1]().hey[0])


// 1. Create an object that has a method that returns an object that has another method.  Call the inner method.
let fighter = {
  ethan: 'ebel',
  friend: 'brad',
  method(){
    return{
      prop: '12,455',
      foo(){
        console.log('my inner most method')
      }
    }
  }
}
fighter.method().foo()



//create a callback

let fun1 = () => {
  console.log("this is fun1")
}

function fun2(fun1) {

}
fun2(fun1())

//indentation
if(true){
  const a = 2 + 2;
  console.log(a);
}

if(true){
  if(false){
    console.log('hi');
  }
}

//semantic naming of variables

const arrOfEvenNums = [2, 4, 6, 8, 10]

//function definition placement 

const bar = ()=>{
    console.log('bar here');
}
bar()

const foo = ()=>{
    console.log('foo here');
}
foo()

