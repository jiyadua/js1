const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:'swift by apple'
}

for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","cpp","rb","swift"];
for (const index in programming) {
    console.log(programming[index]);
    
}

//forof loop me direct value aati hai pr forin loop me array pr loop lgane me index aati hai like 0,1,2

const map =  new Map()
map.set('IN ',"INDIA")
map.set('CHINA',"BEIJING")
map.set('IN ',"INDIA")
for (const key in map) {
    console.log(key);
}