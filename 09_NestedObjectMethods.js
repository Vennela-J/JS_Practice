let smartphone = {
  brand: "PhoneCorp",
  model: "X500",
  specs: {
    display: "6.5-inch",
    storage: "128GB",
    camera: {
      resolution: "12MP",
      video: function() {
        return "4K video recording";
      }
    }
  }
};

console.log(smartphone.specs.camera.resolution);  // Output: 12MP
console.log(smartphone.specs.camera.video());  // Output: 4K video 