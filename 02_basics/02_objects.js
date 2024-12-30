const tinderUser = new Object();
tinderUser.id = "123bc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn = false

// console.log(tinderUser)
// const regularUser = {
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"jiya",
//             lastname:"dua"

//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3 = {obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

// using spread operator
const obj3 = {...obj1,...obj2}//use of spread operator
console.log(obj3)

const users=[
    {
        id:"123",
        email:"j123@gmail.com"
    },
    {
      id:"456",
      email:"g123@gmail.com"
    },
    {
      id:"789",
      email:"r123@gmail.com"
    },
    {
       id:"010",
       email:"v123@gmail.com"
    }
];
console.log(users[1].email);
console.log(users[3].id);

console.log(Object.keys(tinderUser));//it return array of keys
console.log(Object.values(tinderUser));//it returns array of values
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



