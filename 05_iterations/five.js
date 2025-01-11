const coding=["js","ruby","cpp","swift","java"]
coding.forEach( function (item) {
    // console.log(item)
});

//callback function ka name nhi hota
coding.forEach((item)=>{
// console.log(item)
})

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding = [{
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"c++",
    languageFileName:"cpp"
},
{
    languageName:"java",
    languageFileName:"java"
}
]

//Database se value array ki form me aati hai or har ek value object hoti hai
myCoding.forEach((item)=>{
    console.log(item.languageName);
})