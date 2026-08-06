class Studentdetails{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log(this.name);
    }
    getdetails(){
        return(this.name);
    }
}
class Faculty extends Studentdetails{
    constructor(name,make){
        //super(name);
        super(make);
        this.name=name;
    }
    display(){
        super.npdisplay()
        console.log("science");
        console.log(1000);
        console.log("student name is" +this.name)
    }
}
let student= new Faculty("abcd","xyz");
student.display();