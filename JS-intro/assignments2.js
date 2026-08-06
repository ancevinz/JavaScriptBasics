class Student {
    #name;
    #marks;

    setDetails(name, marks) {
        this.#name = name;

        if (marks < 0) {
            console.log("Marks cannot be negative");
            this.#marks = 0;
        } else {
            this.#marks = marks;
        }
    }

    getDetails() {
        console.log("Student Name:", this.#name);
        console.log("Marks:", this.#marks);
        console.log("Grade:", this.calculateGrade());
    }

    calculateGrade() {
        if (this.#marks >= 90) {
            return "A";
        } else if (this.#marks >= 75) {
            return "B";
        } else if (this.#marks >= 50) {
            return "C";
        } else {
            return "Fail";
        }
    }
}

const s1 = new Student();

s1.setDetails("Ance", 82);

s1.getDetails();

// 
2 - Restaurant Class

class Restaurant {
    #foodItem;
    #price;

    setDetails(foodItem, price) {
        this.#foodItem = foodItem;
        this.#price = price;
    }

    prepareFood() {
        console.log(this.#foodItem + " is being prepared.");
    }

    deliverFood() {
        console.log(this.#foodItem + " is delivered.");
    }

    getDetails() {
        console.log("Food Item:", this.#foodItem);
        console.log("Price:", this.#price);
    }
}

const r1 = new Restaurant();

r1.setDetails("Burger", 120);

r1.getDetails();
r1.prepareFood();
r1.deliverFood();