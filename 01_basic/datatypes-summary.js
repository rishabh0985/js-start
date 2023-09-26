//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (non-primitive)

let myName = "google"

let anotherName = myName 
anotherName = "youtube"
console.log(myName);
console.log(anotherName);    

// joh name change ho sakthe hain woh primitive mtplb (Stack) khethe hain 

let userOne = {
    email: "google@com",
    upi: "abc@ybl"
}

let userTwo = userOne
userTwo.email = "youtube@com"

console.log(userOne);
console.log(userTwo);

// joh name change ho sakthe hain unhe Non-Primitive mtlb (Heap) kehthe hain 