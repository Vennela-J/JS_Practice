let company = {
  name: "TechCorp",
  location: "San Francisco",
  departments: {
    engineering: {
      head: "John Doe",
      employees: 50
    },
    marketing: {
      head: "Jane Smith",
      employees: 30
    }
  }
};

console.log(company.departments.engineering.head);  // Output: John Doe
console.log(company.departments.marketing.employees);  // Output: 30

