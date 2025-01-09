//for of
// const arr=[1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
    
    
// }
// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(greet);
    
// }

//Maps

const map =  new Map()
map.set('IN ',"INDIA")
map.set('CHINA',"BEIJING")
map.set('IN ',"INDIA")

// console.log(map)
// for (const index of map) {
//     console.log(index)
// }

//array destructuring
for(const [key,value] of map){
    console.log(key,':-',value)
}