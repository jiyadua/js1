// Primitive

// 7 types:String,number,boolean,null,undefined,symbol,bigint


const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const BigNumber=3456543576654356754n


// Reference(non primitive)

// Array,objects,Functions

const heroes = ["shaktiman","naagraj","dooga"]
let myobj={
    name:"hitesh",
    age:22,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction)
console.log(typeof myobj)
console.log(typeof heroes)

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive),Heap(Non-primitive)


// in stack,call by value is used(copy of variable has been passed)
// in heap,call by reference is used(original address has been pass)
let myyoutubeName = "jiya24089"
let anotherName = myyoutubeName
anotherName="spritualShorts"

console.log(myyoutubeName)
console.log(anotherName)

let userOne={
    email:"jiya45@gmail.com",
    upi:"jiya123@ipn"
}
 let userTwo=userOne;
 console.log(userTwo)

 userTwo.email="jiya@123"
 console.log(userOne.email)
 console.log(userTwo.email)
