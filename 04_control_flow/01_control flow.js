//if 

const balance =  1100;
if( balance > 500) console.log("OK");

const userLoggedIn = true
let debitCard = true
if(userLoggedIn && debitCard && 2==2){
    console.log("User Verified");
    
}


debitCard = true
if(userLoggedIn || debitCard && 2!=2){
    console.log("User Verified");
    
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, 

// truthy
// "0", 'false', " ", [], {}, function(){}


let userArray = []
if(userArray.length == 0){
    console.log("Array is empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length == 0){
    console.log("Object is empty");
    
}
/*

false == 0  ->  true
false == '' ->  true
0 == ""  -> true

*/


//Nullish Coalescing Operator (??) : Null undefined

let val1 ;

val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);


// Ternary  Operator

// conndition ? true : false

const price = 69

price >= 80? console.log("Expensive") : console.log("Buy it");

