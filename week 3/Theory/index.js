// The `let` keyword is used for variables
let programName = 'Embedded Systems';
let year = 2023;

// `const` for constants
const collegeName = 'Fanshawe';

// This will throw an error at runtime
// Notice VSCode not complaining about
// the reassignment? A `linter` tool
// can be added to check for things like this
collegeName = 'Algonquin';

// ------------------------------------------



// ------------------------------------------

let age = 28;            // primitive
let name = 'Tyler';      // primitive
let loading = false;     // primitive
let account = undefined; // primitive
let thing;               // primitive - undefined
let response = null;     // primitive
let counter = Symbol('counter'); // primitive

let user = { name: 'Tyler' };      // reference
let friends = ['Jake', 'Mikenzi']; // reference
let doThing = () => ({});          // reference

// ------------------------------------------



// ------------------------------------------

function foo() {
  // Memory is allocated for `value`
  let value = 123;
  return;
}
foo();
// After `foo` has executed `value` is marked
// for garbage collection (deallocation)

// This is bad
for (let i = 0; i < 10000; i++) {
  let x = i*i;
  console.log(x);
}

// This is good
let x;
for (let i = 0; i < 10000; i++) {
  x = i*i;
  console.log(x);
}

// ------------------------------------------



// ------------------------------------------

function varScoping() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }
  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }
  console.log(x); // will print 1
}

// ------------------------------------------


// ------------------------------------------

function foo(x, y) {
  return x + y;
}

const foo = (x, y) => {
  return x + y;
}

// Implicit return
const foo = (x, y) => x + y;

// Default values
const foo = (x = 1, y = 1) => x + y;
console.log(foo());  // prints 2
console.log(foo(2)); // prints 3

// ------------------------------------------


// ------------------------------------------

2 == '2';     // true
2 === '2';    // false
2 === 2;      // true
null == null; // true
null == undefined;  // true
null === undefined; // false

// If foo() returns false, then
// bar() doesn't get called
if (foo() && bar()) {}



