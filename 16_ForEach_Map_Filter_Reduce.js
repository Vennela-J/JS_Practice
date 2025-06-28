let fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));

//Map - Change each item

let numbers = [1, 2, 3];
let doubled = numbers.map(number=>number*2);
console.log(doubled);  // [2, 4, 6]

//map() to convert a list of test input values into formatted test data objects.
let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);


//filter– Keep only what you need

let numbers1 = [1, 2, 3, 4, 5];
let evenNumbers = numbers1.filter(num => num % 2 === 0);  
console.log(evenNumbers);  // [2, 4]


let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
let failedTests = results.filter(result=> result.status==='fail')
console.log(failedTests);

//reduce - Combine everything into one

let numbers2 = [1, 2, 3, 4];

//add even numbers
let evensum=numbers2.filter(num=>num%2===0).reduce((num,acc)=>num+acc,0)
console.log("even numbers sum: "+evensum)

let results1 = ['pass', 'fail', 'pass'];
let passCount = results1.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
console.log(passCount)

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];


 let result={};
 result['pass']=testResults.reduce((acc,r)=>r==='pass'?acc+1:acc,0);;
 result['failed']=testResults.reduce((acc,r)=>r==='skipped'?acc+1:acc,0);
 result['skipped']=testResults.reduce((acc,r)=>r==='fail'?acc+1:acc,0);
 console.log(result)

// function countStatuses(arr) {
//   return arr.reduce((acc, status) => {
//     acc[status] = (acc[status] || 0) + 1;
//     return acc;
//   }, {});
// }

// let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];
// let statusCounts = countStatuses(testResults);
// console.log(statusCounts);