// if(true){
//     let a=10
//     const b=20
//     c=30
//     console.log("INNER:",a)
// }
// console.log(a)
// console.log(b)
// console.log(c)

// function one(){
//     const username = "jiya"
//     function two(){
//         const website = "youtube"
        // console.log(username);
        // console.log(website);

    // }
    // two();
// }
// one();
/*++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++*/

addone(5);

function addone(num){
return num+1;
}
addTwo(5);//generate error

const  addTwo=function(num){
    return num+2;
}
// addone();
// addTwo(5);