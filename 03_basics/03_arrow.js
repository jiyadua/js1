//this keyword current context ke baare me btata hai
// const user={
//     username:"hitesh",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="SAM"
// user.welcomeMessage()
// console.log(this)//in node environment ,this refer to  empty object
//pehle browser ke andar engine hota tha
//now we seperate the engine from browser and name as node...
//in browser,global object is window

// function chai(){
//     let username="jiya"

//     console.log(this.username)//we cant use this inside function,it return undefined
// }
// chai()

const chai = function(){
    let username="jiya"
    console.log(this);
}
chai();
const chai1 = ()=>{
    let username="jiya"
    console.log(this);
}
chai1();

//chai()//return undefined
//explicit return
// const addTwo = (num1,num2) => {

//     return num1+num2//if we wrap inside curly braces ,then we have to write return
// }
// const addTwo = (num1,num2) =>  num1+num2//implicit return 
const addTwo = (num1,num2) =>  ({username:"hitesh"})
console.log(addTwo(3,4))