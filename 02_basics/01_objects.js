// We can create object using two method
// literal or constructor
// if we make object using constructor,always singleton make
// We cant declare symbol directly in object
// first we have to declare outside object then we can use inside object
// object literals
const mySym =Symbol("Key1")
const JsUser ={
    name:"jiya",
    "fullName":"jiya Dua",
    [mySym]:"myKey1",
    age:20,
    location:"up",
    email:"jiyadua9@google.com",
    isLoggedIn:false,
    lastLoginDays : ["Monday","Friday"]
}
console.log(JsUser.email)
// Another method to access value
console.log(JsUser["email"])
console.log(JsUser["fullName"])
console.log( JsUser[mySym])

JsUser.email="jiya8@gmail.com"
// Object.freeze(JsUser)
JsUser.email="jiya98@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello...............")
}
JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`)//this is used for access reference of same object

}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
console.log(JsUser)




