"use strict";
class Empl {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    display() {
        console.log(this.id);
        console.log(this.name);
    }
    getnam() {
        return (this.name);
    }
}
const em = new Empl(12, "ance");
console.log(em.getnam());
em.display();
