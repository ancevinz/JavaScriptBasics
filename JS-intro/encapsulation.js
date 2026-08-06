class Atmmachine {
    #mybalance = 1000;

    constructor(amount) {
        this.amount = amount;
    }

    deposit() {
        return this.#mybalance + this.amount;
    }

    getbalance() {
        let total = this.deposit();
        return total;
    }
}
let atm = new Atmmachine(500);
console.log(atm.getbalance());