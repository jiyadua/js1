function print(){
    console.log("J")
    console.log("i")
    console.log("y")
    console.log("a")


}
print();
// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
    console.log("jiya")//unreachable code
}

// const result=addTwoNumbers(3,10);
// console.log("Result",result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage())



function calculateCartPrice(val1,val2,...num1){//rest operator
    return num1;

}
console.log(calculateCartPrice(200,400,600,800,999,1000))

 const user  ={
    username:"jiya",
    price:123
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.id}`)
}


// handleObject(user)
handleObject({
    username:"sam",
    price:899
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];

}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,600,800,1000]))









