//String Primitive Type Example

let name = "John Doe";
name = "Jane Doe"; // This is allowed, as name is a string
console.log(name); // Output: Jane Doe
name.toUpperCase(); // This is allowed, as toUpperCase is a method of string
console.log(name); // Output: Jane Doe as strings are immutable
console.log(typeof name);

// Number Primitive Type Example
let age = 30;
age = 31; // This is allowed, as age is a number
console.log(age); // Output: 31
age = age + 1; // This is allowed, as we can perform arithmetic operations on numbers
console.log(age); // Output: 32
console.log(typeof age);

// Boolean Primitive Type Example
let isMarried = false;
console.log(isMarried);  // Output: false
console.log(typeof isMarried);
isMarried ="test";
console.log(typeof isMarried);//string
console.log(isMarried); // Output: test

//null
let car = null;
console.log(car);  // Output: null
console.log(typeof car);  // Output: object (this is a quirk in JavaScript)

// Undefined
let salary;
console.log(salary);  // Output: undefined
console.log(typeof salary);  