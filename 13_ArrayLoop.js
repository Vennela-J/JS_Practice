let colors = ["red", "green", "blue"];
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3
console.log(typeof colors);  // Output: object
//traditional
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
//modern
for (let color of colors) {
    console.log(color);
}

//for each
colors.forEach(function(color) {
    console.log(color);
});
// Or using arrow function
colors.forEach(color => console.log(color));