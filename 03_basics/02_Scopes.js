/*
====================
JAVASCRIPT SCOPES 
====================
*/

/*
1. WHAT IS SCOPE?
- Scope defines where variables can be accessed in your code
- Controls visibility and lifetime of variables
*/


/*
==================================================
2. TYPES OF SCOPE
==================================================
*/


/*
2.1 GLOBAL SCOPE
- Variables declared outside any function/block
- Accessible everywhere
*/

let globalVar = "I am global";

function test() {
  console.log(globalVar); // accessible
}

/*
⚠️ Problem:
- Can lead to bugs due to overwriting
- Avoid excessive global variables
*/


/*
2.2 FUNCTION SCOPE
- Variables declared inside a function
- Accessible only inside that function
*/

function example() {
  let msg = "Hello";
  console.log(msg); // ✅
}

// console.log(msg); ❌ Error

/*
Use Case:
- Encapsulation, avoiding pollution
*/


/*
2.3 BLOCK SCOPE (IMPORTANT)
- Variables declared with let & const
- Scoped inside { }
*/

{
  let a = 10;
  const b = 20;
}

// console.log(a); ❌ Error
// console.log(b); ❌ Error

/*
Note:
- var is NOT block scoped
*/

{
  var x = 100;
}

console.log(x); // ✅ accessible (problem)


/*
==================================================
3. var vs let vs const (INTERVIEW FAVORITE)
==================================================
*/

var a = 1;   // function scoped
let b = 2;   // block scoped
const c = 3; // block scoped (cannot reassign)

/*
Key Differences:
- var:
  - function scoped
  - hoisted with undefined
  - can redeclare

- let:
  - block scoped
  - cannot redeclare in same scope

- const:
  - block scoped
  - cannot reassign
*/


/*
==================================================
4. LEXICAL SCOPE (VERY IMPORTANT)
==================================================
- Inner function can access variables of outer function
- Scope determined by where code is written
*/

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(outerVar); // ✅ accessible
  }

  inner();
}

/*
This is the foundation of closures
*/


/*
==================================================
5. SCOPE CHAIN
==================================================
- JS looks for variable in:
  1. Current scope
  2. Parent scope
  3. Global scope
*/

let globalValue = "Global";

function parent() {
  let parentValue = "Parent";

  function child() {
    console.log(parentValue); // found in parent
    console.log(globalValue); // found in global
  }

  child();
}


/*
==================================================
6. TEMPORAL DEAD ZONE (TDZ) (ADVANCED)
==================================================
- let & const are hoisted but NOT initialized
- Accessing before declaration → error
*/

// console.log(a); ❌ ReferenceError
let a = 10;

/*
TDZ = time between hoisting and initialization
*/


/*
==================================================
7. CLOSURE + SCOPE (IMPORTANT COMBO)
==================================================
*/

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const c1 = counter();
c1(); // 1
c1(); // 2

/*
Even after outer function ends,
inner function remembers `count`
*/


/*
==================================================
8. COMMON INTERVIEW TRICK
==================================================
*/

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 3 3 3

/*
Because var is function scoped
*/

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0 1 2


/*
==================================================
9. BEST PRACTICES
==================================================
- Prefer let & const over var
- Minimize global variables
- Use block scope for safety
- Understand lexical scope deeply
*/


/*
==================================================
10. INTERVIEW SUMMARY (SAY THIS)
==================================================
- JS uses lexical scoping
- Scope types: global, function, block
- let/const are block scoped, var is function scoped
- Scope chain resolves variables
- Closures depend on lexical scope
*/