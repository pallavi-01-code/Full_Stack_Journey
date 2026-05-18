class ToyotaCar {
    constructor (brand , mileage){
        console.log("Creating new objects");
        this.brand = brand;
        this.mileage = mileage;
    }
    start () {
        console.log("Start");
    }

    stop () {
        console.log("Stop");
    }
}

let fortuner = new ToyotaCar("fortuner", 40);
console.log(fortuner);
//fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus" , 12);
console.log(lexus);
//lexus.setBrand("lexus");

class Parent {
    hello() {
        console.log("hello");
    }
}

class child extends Parent {

}

let obj = new child ();

class Person {
    constructor (name) {
        //console.log("Entered Parent Constructor");
        this.species = "Homo Sapiens";
        this.name = name;
    }
    eat () {
        console.log("eat"); 
    }
    // sleep () {
    //     console.log("sleep");
    // }

    // work (){
    //     console.log("Do nothings");
    // }
}

class Engineer extends Person{
    constructor (name) {
        //constructor (branch) {
        //console.log("Entered Child Constructor");
        super(name); // to invoke parent class constructor
        //this.branch = branch;
        //console.log("Exited Child Constructor");
    }
     work () {
        super.eat();
        console.log("Solve problems, build something");
     }

}

class Doctor extends Person{
     work () {
        console.log("Treats Patients");
     }
}

//let pallavi = new Engineer();

//let kapila = new Doctor();
//let engObj = new Engineer("Computer Science Engg.")
let engObj = new Engineer("Pallavi")