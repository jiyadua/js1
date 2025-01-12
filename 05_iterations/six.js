//const coding=["js","ruby","cpp","swift","java"]
// const values = coding.forEach(  (item) =>{
//      console.log(item)
//      return item;
// });
// console.log(values);


// forEach does not return any value so,instead of forEach we use filter()method



// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=> num>4);
// console.log(newNums)

// const newNums = myNums.filter((num)=>{
    // return num>4;
// })
// console.log(newNums);

//if we use paranthesis{} in arraow function then block will start and we have to write return keyword but if we dont use use paranthesis then we dont need to write return 

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>9){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books=[{title:'BOOK ONE',genre:'FICTION',publish:1981,edition:2004},
    {title:'BOOK TWO',genre:'NON-FICTION',publish:1992,edition:2008},
    {title:'BOOK THREE',genre:'HISTORY',publish:1999,edition:2007},
    {title:'BOOK FOUR',genre:'NON-FICTION',publish:1989,edition:2010},
  {title:'BOOK FIVE',genre:'SCIENCE',publish:2009,edition:2014},
    {title:'BOOK SIX',genre:'FICTION',publish:1987,edition:2010},
    {title:'BOOK SEVEN',genre:'HISTORY',publish:1986,edition:1996}
    ]
//     const userBooks = books.filter((bk)=>bk.genre==='HISTORY')
//    console.log(userBooks)
const userBooks = books.filter((bk)=>{
    return bk.publish>=1995&&bk.genre==='HISTORY'})
   console.log(userBooks);

   