// date
let myDate = new Date()
// console.log(myDate);//give today date
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);
// let myCreatedDate = new Date(2024,0,23);
// console.log(myCreatedDate.toDateString())
// let myCreatedDate1 = new Date(2024,0,23,5,30);
// console.log(myCreatedDate.toLocaleString())
let myCreatedDate = new Date("2024-01-14");
// console.log(myCreatedDate.toLocaleString())

// Time Stamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))//convert millsec into sec

let newDate = new Date();
console.log(newDate.getMonth()+1);//give month

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    

}))
console.log(newDate.toString())






