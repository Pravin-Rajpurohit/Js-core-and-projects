// ════════════════════════════════════════════════
//           JS STRING METHODS — COMPLETE GUIDE
// ════════════════════════════════════════════════


// ── 1. String Creation ───────────────────────────
let s1 = 'hello';
let s2 = "hello";
let s3 = `hello`;
let s4 = String(123);       // "123"
// let s5 = new String("hi"); // avoid this


// ── 2. Template Literals ─────────────────────────
let name = "Pravin";
let score = 97;

console.log(`Hello, ${name}!`);
console.log(`Score: ${score}/100`);
console.log(`2 + 3 = ${2 + 3}`);
console.log(`Grade: ${score >= 90 ? "A" : "B"}`);

let msg = `Line 1
Line 2
Line 3`;
console.log(msg);

let items = ["node", "express", "mongo"];
console.log(`Stack: ${items.map(i => `[${i}]`).join(" ")}`);


// ── 3. Length & Accessing Characters ─────────────
let str = "hello world";

console.log(str.length);          // 11
console.log(str[0]);              // "h"
console.log(str.at(-1));          // "d"
console.log(str.charAt(4));       // "o"
console.log(str.charCodeAt(0));   // 104
console.log(String.fromCharCode(104)); // "h"


// ── 4. Case Conversion ───────────────────────────
console.log(str.toUpperCase());   // "HELLO WORLD"
console.log(str.toLowerCase());   // "hello world"


// ── 5. Trimming ──────────────────────────────────
console.log("  hello  ".trim());       // "hello"
console.log("  hello  ".trimStart()); // "hello  "
console.log("  hello  ".trimEnd());   // "  hello"


// ── 6. Searching & Checking ──────────────────────
console.log(str.includes("world"));    // true
console.log(str.includes("xyz"));      // false
console.log(str.startsWith("hello"));  // true
console.log(str.endsWith("world"));    // true
console.log(str.indexOf("o"));         // 4
console.log(str.lastIndexOf("o"));     // 7
console.log(str.indexOf("xyz"));       // -1
console.log(str.search(/world/));      // 6


// ── 7. Extracting Substrings ─────────────────────
// slice(start, end) — supports negatives ✅ preferred
console.log(str.slice(0, 5));    // "hello"
console.log(str.slice(6));       // "world"
console.log(str.slice(-5));      // "world"
console.log(str.slice(-5, -2));  // "wor"

// substring(start, end) — no negatives
console.log(str.substring(0, 5)); // "hello"
console.log(str.substring(6));    // "world"


// ── 8. Split & Join ──────────────────────────────
console.log("a,b,c".split(","));      // ["a","b","c"]
console.log("hello".split(""));       // ["h","e","l","l","o"]
console.log("hello".split("", 3));    // ["h","e","l"]
console.log(["a","b","c"].join("-")); // "a-b-c"


// ── 9. Replace ───────────────────────────────────
let s = "hello world world";

console.log(s.replace("world", "JS"));       // first match only
console.log(s.replaceAll("world", "JS"));    // all matches
console.log(s.replace(/world/g, "JS"));      // regex global flag
console.log("Hello WORLD".replace(/hello/i, "Hi")); // case-insensitive

// replace with a function
let upper = "abc".replace(/[a-c]/g, ch => ch.toUpperCase());
console.log(upper); // "ABC"


// ── 10. Pad & Repeat ─────────────────────────────
console.log("5".padStart(3, "0"));   // "005"
console.log("42".padStart(5, "0"));  // "00042"
console.log("5".padEnd(3, "0"));     // "500"
console.log("hi".padEnd(6, "."));    // "hi...."

// real-world: format time HH:MM:SS
let h = 9, m = 5, sec = 3;
let time = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
console.log(time); // "09:05:03"

console.log("ha".repeat(4));          // "hahahaha"
console.log("-".repeat(20));          // "--------------------"
console.log("na ".repeat(4) + "Batman!");


// ── 11. String Comparison ────────────────────────
console.log("apple" < "banana");     // true (lexicographic)
console.log("Z" < "a");              // true (Z=90, a=97)

console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); //  1
console.log("a".localeCompare("a")); //  0

let fruits = ["banana", "Apple", "cherry", "avocado"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);

// case-insensitive equality
let a = "Hello", b = "hello";
console.log(a.toLowerCase() === b.toLowerCase()); // true


// ── 12. Regex with Strings ───────────────────────
let text = "hello world 123 and 456";

console.log(text.match(/\d+/));      // first match only
console.log(text.match(/\d+/g));     // ["123","456"] all matches

for (let m of text.matchAll(/\d+/g)) {
  console.log(`Found "${m[0]}" at index ${m.index}`);
}

console.log(text.search(/\d+/));     // 12

console.log(/^hello/.test(text));    // true

let email = "pravin@example.com";
console.log(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)); // true


// ── 13. String → Number ──────────────────────────
console.log(Number("42"));          // 42
console.log(Number("3.14"));        // 3.14
console.log(Number(""));            // 0
console.log(Number("abc"));         // NaN
console.log(parseInt("42px"));      // 42
console.log(parseFloat("3.14rem")); // 3.14
console.log(+"42");                 // 42
console.log(+"abc");                // NaN

// Number → String
console.log((42).toString());       // "42"
console.log((255).toString(16));    // "ff" (hex)
console.log((3.14159).toFixed(2));  // "3.14"
console.log((1000).toLocaleString()); // "1,000"


// ── 14. Immutability ─────────────────────────────
let orig = "hello";
orig.toUpperCase();        // returns new string, orig unchanged
console.log(orig);         // "hello"

orig = orig.toUpperCase(); // must reassign
console.log(orig);         // "HELLO"

// chaining — each method returns a new string
let result = "  Hello World  "
  .trim()
  .toLowerCase()
  .replace("world", "JS");
console.log(result); // "hello js"
