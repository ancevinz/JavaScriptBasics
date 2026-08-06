class Empl {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    display(): void {
        console.log(this.id);
        console.log(this.name);
    }
    getnam(): string {
        return (this.name)
    }
}
const em = new Empl(12, "ance");
console.log(em.getnam())
em.display();