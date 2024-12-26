 "use strict";//treat all JS code as newer version
 //alert(3+3) //we are using nodejs,not browser

 let name="jiya"
 let age=18
 let isLoggedIn = false

 // number =>2 to power 53
 //bigint
 //string =""
 //boolean =>true/false
 //null =>standalone value
 //undefined=>
 //symbol=>unique

 //object
 console.log(typeof 5432)

 console.log(typeof undefined)
 console.log(typeof null)

 //Datatype conversion operation
 let score="33abc"
 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber);
 console.log(valueInNumber);

 //"33"=>33
//  "33abc"=>nan
//true=>1;//false=>0
//null=>0
//undefined=>nan

let isloggedIn = 1;
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log(booleanIsLoggedIn)

//1=>true;0=>false
//""=>false
//"hitesh"=>true