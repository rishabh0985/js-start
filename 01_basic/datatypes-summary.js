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

/*  primitive(Stack) value woh hain joh ek hi naam ka another folder ko copy karke detha hain aur joh copy value 
ko hum change karthe hain woh sirf dusri jagah change hothi hain neh ki real value main */ 
  

let userOne = {
    email: "google@com",
    upi: "abc@ybl"
}

let userTwo = userOne
userTwo.email = "youtube@com"

console.log(userOne);
console.log(userTwo);

/* Non-Primitive  (Heap) value joh hothe hain jiski ek value ka naam hum dusri jagha change karthe hain toh 
woh value dusri jagha bhi chnage ho jathi hain */