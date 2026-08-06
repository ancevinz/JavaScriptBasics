class Restaurant {
    // Private variables
    #foodItem;
    #price;

    constructor(foodItem, price) {
        this.#foodItem = foodItem;
        this.#price = price;
    }

    prepareFood() {
        console.log("Preparing " + this.#foodItem);
    }

    deliverFood() {
        console.log("Delivering " + this.#foodItem);
    }

    getDetails() {
        console.log("Food Item: " + this.#foodItem);
        console.log("Price: " + this.#price);
    }
}

// Create object
let order = new Restaurant("Burger", 150);

order.prepareFood();
order.deliverFood();
order.getDetails();