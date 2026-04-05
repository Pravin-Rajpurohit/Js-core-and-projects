// ════════════════════════════════════════════════
//         JS OBJECTS — INTERVIEW FOCUSED
// ════════════════════════════════════════════════

// ── Symbol as Object Key ─────────────────────────

const id   = Symbol("id");
const role = Symbol("role");

const user1 = {
  name: "Pravin",
  [id]:   101,          // symbol key
  [role]: "admin"       // symbol key
};

// access — only via the symbol variable
console.log(user.name);   // "Pravin"
console.log(user1[id]);    // 101
console.log(user1[role]);  // "admin"


// ── Symbols are invisible to normal operations ────

console.log(Object.keys(user1));      // ["name"]         — no symbols
console.log(Object.values(user1));    // ["Pravin"]        — no symbols
console.log(JSON.stringify(user1));   // {"name":"Pravin"} — no symbols

for (const key in user1) {
  console.log(key);                  // only "name"
}

// only way to see them
console.log(Object.getOwnPropertySymbols(user1)); // [Symbol(id), Symbol(role)]








// ── 1. Creating Objects ──────────────────────────
const user = { name: "Pravin", age: 21 };          // object literal ✅ most common
const user2 = new Object({ name: "Pravin" });       // avoid this
const user3 = Object.create(null);                  // no prototype


// ── 2. Access ────────────────────────────────────
console.log(user.name);          // dot notation
console.log(user["name"]);       // bracket notation — use when key is dynamic

const key = "age";
console.log(user[key]);          // 21 ← this is why bracket notation exists


// ── 3. Add / Update / Delete ─────────────────────
user.city = "Mumbai";            // add
user.age  = 22;                  // update
delete user.city;                // delete

console.log("city" in user);     // false — check if key exists
console.log(user.hasOwnProperty("name")); // true


// ── 4. Destructuring ─────────────────────────────
const { name, age1 } = user;
console.log(name, age1);          // "Pravin" 21

// rename while destructuring
const { name: userName } = user;
console.log(userName);           // "Pravin"

// default value
const { city1 = "Mumbai" } = user;
console.log(city1);               // "Mumbai"

// nested destructuring
const person = { address: { pin: 400001 } };
const { address: { pin } } = person;
console.log(pin);                // 400001

// in function params (used everywhere in React/Node)
function greet({ name, age }) {
  console.log(`${name} is ${age}`);
}
greet(user);


// ── 5. Spread & Rest ─────────────────────────────
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// merge objects
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a:1, b:2, c:3, d:4 }

// clone (shallow)
const clone = { ...user };

// override specific key
const updated = { ...user, age: 99 };
console.log(updated); // age is 99, rest unchanged

// rest in destructuring
const { name: n, ...remaining } = { name: "Pravin", age: 21, city: "Mumbai" };
console.log(remaining); // { age:21, city:"Mumbai" }


// ── 6. Object Methods ────────────────────────────
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj);    // ["a","b","c"]
Object.values(obj);  // [1,2,3]
Object.entries(obj); // [["a",1],["b",2],["c",3]]

// iterate
Object.entries(obj).forEach(([key, val]) => {
  console.log(key, val);
});

// build object from entries
const doubled = Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v * 2])
);
console.log(doubled); // { a:2, b:4, c:6 }

// assign (shallow merge — mutates target)
const target = { a: 1 };
Object.assign(target, { b: 2 }, { c: 3 });
console.log(target); // { a:1, b:2, c:3 }

// freeze — no changes allowed
const config = Object.freeze({ API_URL: "https://api.example.com" });
config.API_URL = "hacked"; // silently fails
console.log(config.API_URL); // unchanged


// ── 7. Shorthand ─────────────────────────────────
const age = 21;
const city = "Mumbai";

// old way
const old = { age: age, city: city };

// shorthand ✅
const modern = { age, city };

// method shorthand
const obj3 = {
  greet() {                      // ✅ instead of greet: function()
    return "hello";
  }
};

// computed keys
const prefix = "get";
const obj4 = {
  [`${prefix}Name`]() { return "Pravin"; }
};
console.log(obj4.getName()); // "Pravin"


// ── 8. Optional Chaining (?.) ────────────────────
const data = { user: { address: { city: "Mumbai" } } };

console.log(data.user?.address?.city);     // "Mumbai"
console.log(data.user?.phone?.number);     // undefined (no error) ✅
console.log(data.user?.getName?.());       // undefined (no error) ✅

// without ?. this would throw TypeError


// ── 9. Nullish Coalescing (??) ───────────────────
const input = null;

console.log(input ?? "default");   // "default"
console.log(0    ?? "default");    // 0      ← ?? only checks null/undefined
console.log(0    || "default");    // "default" ← || treats 0 as falsy ⚠️
console.log(""   ?? "default");    // ""     ← empty string is NOT null
console.log(""   || "default");    // "default" ⚠️ difference!


// ── 10. Shallow vs Deep Clone ────────────────────
const original = { name: "Pravin", address: { city: "Mumbai" } };

// shallow clone — nested objects still shared
const shallow = { ...original };
shallow.address.city = "Delhi";
console.log(original.address.city); // "Delhi" ← mutated! ⚠️

// deep clone (modern way)
const deep = structuredClone(original);
deep.address.city = "Pune";
console.log(original.address.city); // "Delhi" ← untouched ✅


// ── 11. 'this' in Objects ────────────────────────
const counter = {
  count: 0,
  increment() {
    this.count++;             // 'this' = counter object ✅
  },
  // ⚠️ arrow functions don't have their own 'this'
  decrement: () => {
    // this.count-- → won't work, 'this' is outer scope
  }
};
counter.increment();
console.log(counter.count); // 1


// ── 12. Common Patterns in Projects ──────────────

// array of objects → lookup map (O(1) access)
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob"   }
];
const userMap = Object.fromEntries(users.map(u => [u.id, u]));
console.log(userMap[1]); // { id:1, name:"Alice" }

// remove a key immutably (used in Redux)
const { password, ...safeUser } = { name: "Pravin", password: "secret", age: 21 };
console.log(safeUser); // { name:"Pravin", age:21 } — no password

// dynamic key update (used in form handlers)
const field = "email";
const value = "pravin@gmail.com";
const formState = { name: "Pravin" };
const newState = { ...formState, [field]: value };
console.log(newState); // { name:"Pravin", email:"pravin@gmail.com" }


// ── KEY GOTCHAS ──────────────────────────────────

// ⚠️ objects are reference types
const a = { x: 1 };
const b = a;
b.x = 99;
console.log(a.x); // 99 — same reference!

// ⚠️ comparing objects
const p = { x: 1 };
const q = { x: 1 };
console.log(p === q); // false ❌ different references
console.log(JSON.stringify(p) === JSON.stringify(q)); // true ✅ (simple cases)

// ⚠️ for...in loops over prototype chain too
const obj5 = { a: 1 };
for (const key in obj5) {
  if (obj5.hasOwnProperty(key)) { // guard against inherited props
    console.log(key);
  }
}
// better: just use Object.keys() instead of for...in