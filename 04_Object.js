let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  isStudent: false
};
console.log(person.firstName);  // Output: Jane
console.log(person["lastName"]);  // Output: Doe
console.log(typeof person);  // Output: object
console.log(person);
person.isEmployee = true; // Adding a new property
console.log(person);
person["company"]= "Tech Corp"; // Adding another property using bracket notation
console.log(person.company);  // Output: Tech Corp
console.log(person);
console.log(Object.keys(person));  // Output: Array of keys in the object
console.log(Object.values(person));  // Output: Array of values in the object
console.log(Object.entries(person));  // Output: Array of key-value pairs in the object
delete person.company; // Deleting a property
console.log(person);  // Output: Object without the 'company' property
