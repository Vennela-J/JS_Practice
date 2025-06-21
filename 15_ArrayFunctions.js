let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]
let removedFruit = fruits.pop();  
console.log(removedFruit);  // Output: "orange"
console.log(fruits);//[ 'apple', 'banana' ]
let firstFruit = fruits.shift();  
console.log(firstFruit);  // Output: "apple"
console.log(fruits); //[ 'banana' ]
fruits.unshift("apple");  
console.log(fruits);//[ 'apple', 'banana' ]
//fruits.unshift("gauva","pineapple"); 
//console.log(fruits);
// Removes 1 element at index 1, and inserts "kiwi" at index 1
fruits.splice(1, 1, "kiwi");  
console.log(fruits);  // Output: ["apple", "kiwi"]
fruits = ["apple", "banana", "orange", "kiwi"];
//Returns a shallow copy of a portion of an array into a new array, selected from start to end (end not included)
let citrus = fruits.slice(1, 3);  
console.log(citrus);  // Output: ["banana", "orange"]
console.log(fruits); //console.log(fruits); 
fruits.splice(1,2);//[ 'apple', 'kiwi' ]
console.log(fruits); 
let moreFruits = ["orange", "kiwi"];
let allFruits = fruits.concat(moreFruits);  
console.log(allFruits); //[ 'apple', 'kiwi', 'orange', 'kiwi' ]
let index = fruits.indexOf("banana");  
console.log(index); //-1
index = fruits.indexOf("kiwi");  
