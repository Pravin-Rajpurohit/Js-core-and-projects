function addTwoNumbers(num1 , num2){    //Parameters
    return num1 + num2;
}

// console.log(addTwoNumbers(3 , "4"));
// console.log(addTwoNumbers("3" , 4));

// console.log(addTwoNumbers(3 , "A"));    //arguments



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 5000));



//passing objects
const user = {
    username: "Raghav",
    age: 15,
}

function handleObject(anyobject){
    console.log(`Hello ${anyobject.username}, your age is ${anyobject.age}`);
}

handleObject(user)

handleObject({
    username: "Sam",
    age: 18
})


//passing Arrays
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));




/*
==================================================
JAVASCRIPT FUNCTIONS — INTERVIEW NOTES (VS CODE)
==================================================
*/

/*
1. WHAT IS A FUNCTION?
- Reusable block of code to perform a task
- Improves modularity and reusability
*/

function greet(name) {
  return "Hello " + name;
}

/*
==================================================
2. TYPES OF FUNCTIONS
==================================================
*/

/*
2.1 FUNCTION DECLARATION
- Hoisted (can call before definition)
- Named function
*/
function add(a, b) {
  return a + b;
}

/*
Use Case:
- Core logic used across application
*/


/*
2.2 FUNCTION EXPRESSION
- Stored in variable
- Not hoisted like declaration
*/
const subtract = function (a, b) {
  return a - b;
};

/*
Use Case:
- Callbacks, dynamic assignments
*/


/*
2.3 ARROW FUNCTION (IMPORTANT)
- Short syntax
- Lexical `this`
- Cannot be used as constructor
*/
const multiply = (a, b) => a * b;

/*
Use Case:
- Array methods, callbacks
*/
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);


/*
2.4 ANONYMOUS FUNCTION
- Function without name
*/
setTimeout(function () {
  console.log("Runs after 1 sec");
}, 1000);

/*
Use Case:
- One-time use, callbacks
*/


/*
2.5 IIFE (Immediately Invoked Function Expression)
- Runs immediately
- Creates private scope
*/
(function () {
  console.log("IIFE executed");
})();

/*
Use Case:
- Avoid global scope pollution
*/


/*
2.6 CALLBACK FUNCTION (VERY IMPORTANT)
- Passed as argument to another function
*/
function processUser(name, callback) {
  callback(name);
}

processUser("Pravin", function (name) {
  console.log("Hello " + name);
});

/*
Use Case:
- Async operations, event handling
*/


/*
2.7 HIGHER-ORDER FUNCTION
- Takes function as argument OR returns function
*/
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
double(5); // 10

/*
Use Case:
- Functional programming, reusable logic
*/


/*
2.8 CONSTRUCTOR FUNCTION
- Used with `new` keyword to create objects
*/
function User(name) {
  this.name = name;
}

const user1 = new User("Pravin");

/*
Use Case:
- Object creation (before classes)
*/


/*
2.9 GENERATOR FUNCTION (ADVANCED)
- Uses `function*`
- Pauses execution with `yield`
*/
function* gen() {
  yield 1;
  yield 2;
}

const g = gen();
g.next(); // { value: 1, done: false }

/*
Use Case:
- Iterators, lazy loading
*/


/*
2.10 ASYNC FUNCTION (MODERN JS)
- Returns Promise
- Uses await
*/
async function fetchData() {
  const res = await fetch("https://api.example.com");
}

/*
Use Case:
- API calls, async operations
*/


/*
==================================================
3. IMPORTANT CONCEPTS
==================================================
*/

/*
3.1 FIRST-CLASS FUNCTIONS
- Functions can be assigned, passed, returned
*/
const sayHi = () => "Hi";


/*
3.2 CLOSURE (VERY IMPORTANT)
- Inner function remembers outer variables
*/
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2

/*
Use Case:
- Data privacy, state management
*/


/*
3.3 `this` KEYWORD
- Depends on how function is called
- Arrow function does NOT have its own `this`
*/


/*
3.4 HOISTING
- Only function declarations are hoisted
*/
sayHello();

function sayHello() {
  console.log("Hello");
}

/*
Function expressions are NOT hoisted
*/


/*
3.5 DEFAULT PARAMETERS
*/
function greetUser(name = "Guest") {
  return name;
}


/*
3.6 REST PARAMETERS
*/
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}


/*
==================================================
4. INTERVIEW QUICK POINTS
==================================================
- Functions are first-class citizens in JS
- Arrow functions have lexical `this`
- Closures are heavily used in real-world apps
- Callbacks & async functions are key for backend
- Higher-order functions improve reusability
- Understand difference:
    - declaration vs expression
    - arrow vs normal function
*/


/*
==================================================
5. WHAT INTERVIEWERS EXPECT
==================================================
- Explain closure clearly
- Use functions in async scenarios
- Understand callbacks & promises
- Write clean, modular code
*/