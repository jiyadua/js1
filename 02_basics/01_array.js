const arr = [0,1,2,3,4];
const newArr = ["shaktiman","batman"]
const arr1 = new Array(0,1,2,3,4);
// console.log(arr1[0]);

// a deep copy is one whose properties do not share the same references
// a shallow copy is one whose properties share the same references

// Array Methods

// arr1.push(6);
// arr1.push(7);
// arr1.push(8);
// arr1.pop()
// arr1.unshift(-1);//add element to the beginning
// arr1.shift();//remove element from the beginning
// console.log(arr1.includes(8));
// console.log(arr1.indexOf(90));
// const Arr = arr1.join()//join method convert array into string
// console.log(Arr);
// console.log(arr1);


//slice,splice
console.log("A ",arr1);
const myNewArr1 = arr1.slice(2,3)
// console.log(myNewArr1);
 console.log("B ",arr1);
// console.log(arr1);
const myNewArr2 = arr1.splice(1,3);
// console.log(myNewArr2);
console.log("C ",arr1);
// console.log(arr1);
//splice change the original value and return the remain aaray value
// slice doesn't change the original array value
