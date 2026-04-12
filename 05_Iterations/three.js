const arr = [ 1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log("Each Char is " + greet);
    
}

//Maps

const map = new Map()
map.set("Bo", "Borivali")
map.set("V" , 'Virar')
map.set('By', 'Bhyander')
map.set('Bo', 'Borivali')

console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
    
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
        
}

const language1 = ["py", "Js", "C++", "java"]

for (const key in language1) {
    // console.log(languages[key]);
    
    
}





//objects => Forin
//Arrays => Forof


//For Each
const languages = ["py", "Js", "C++", "java"]

languages.forEach( function (val) {        //callback func don't have name
    console.log(val);
    
})


languages.forEach( (item) => {
    console.log(item);
    
})





function printMe(item){
    console.log(item);
    
}

languages.forEach(printMe)

