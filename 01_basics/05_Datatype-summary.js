// Js is dynamically typed language
// because data type will automatically assigned at the time of compilation and code execution

//premitive             
// 7 types: String, Number, Boolean, null, undefined, Symbol, bigint

const id = Symbol("123")
const AnotherId = Symbol("123")
console.log(id ===  AnotherId);
console.log(id ==  AnotherId);

const BigNumber = 7632487124246298349632n
console.log(typeof BigNumber)


//Reference (Non Premitive)
// Array, objects, Functions

const heros = ["ironman", "naagRaj", "spiderman", "thor"]

let myObj ={
    name:" pravin",
    age: 23
}

const myFunction = function(){
    console.log("hello world");
}

//  Stact (Premitive)  -> you get copy of  ariable declared
//  Heap(Non-Premitive)-> you get ref of OG variable mean changes are made to original variable


//stack
let myName = "Pravin.company"
let anotherName = myName
anotherName = "Apni.comapny"
console.log(myName)
console.log(anotherName)

//heap
let user1 = {
    Email: "pravin.google.com",
    upi: "user@sbyl"
}

let user2 = user1

user2.Email = "Hitesh@google.com"

console.log(user1);
console.log(user2);
