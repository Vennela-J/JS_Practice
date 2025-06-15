function testScope() {
  if (true) {
    var oldVar = "I am a var"; // function-scoped
    let newLet = "I am a let"; // block-scoped
    const constant = "I am a const"; // block-scoped
  }

  
  console.log(oldVar);  // Output: I am a var
  //console.log(newLet);  // Error: newLet is not defined
//console.log(constant); // Error: constant is not defined
}

// function testScope() {
//     let greeting = "Hello, World!";
//     if(true){
//         greeting = "Hello, World1"; // Reassigning the greeting variable
//         console.log(greeting); // Output: Hello, World1!
//     }
//     console.log(greeting); // Output: Hello, World1!
// }

// function testScope() {
//     const greeting = "Hello, World!";
//     if (true) {
//         greeting = "Hello, World1"; // Reassigning the greeting variable
//         //console.log(greeting); // TypeError: Assignment to constant variable.
//     }
//     //console.log(greeting); // execution stops at reassigning line
// }
testScope();
