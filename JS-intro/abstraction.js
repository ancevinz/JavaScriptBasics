class Atmmachine {
    mybalance = 1000;

    constructor(amount) {
        this.amount = amount;
    }

    #deposit() {
        return (this.mybalance + this.amount);
    }

    getbalance() {
        let total = this.#deposit();
        console.log(total);
    }
}

let atm = new Atmmachine(500);
atm.getbalance();