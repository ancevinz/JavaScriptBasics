// 1. Create a Mobile 
const mobile = {
  brand: "Samsung",model: "Galaxy S24",price: 75000,
  displayDetails: function () {
    console.log("Brand: " + this.brand);console.log("Model: " + this.model);console.log("Price: " + this.price);
  }
};
mobile.displayDetails();
// 2. Create
class Student {
  constructor(name, rollNumber, mark) {
    this.name = name;this.rollNumber = rollNumber;this.mark = mark;
  }
  displayStudent() {
    console.log("Name: " + this.name);console.log("Roll Number: " + this.rollNumber);console.log("Mark: " + this.mark);
  }
  isPassed() {
    if (this.mark >= 50) {
      console.log("Pass");
    } else {
      console.log("Fail");
    }
  }
}
// Create object
const student1 = new Student("Ance", 101, 65);
student1.displayStudent();student1.isPassed();