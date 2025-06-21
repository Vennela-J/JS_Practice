let car = {
  make: "Tesla",
  model: "Model 3",
  features: {
    autopilot: true,
    battery: "75 kWh"
  }
};

// Modifying nested object properties
car.features.battery = "80 kWh";
car.features.color = "Red";  // Adding new property to nested object

console.log(car.features.battery);  // Output: 80 kWh
console.log(car.features.color);  // Output: Red