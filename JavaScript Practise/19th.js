let data = "Secret Information";

class User {
    constructor (name , email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data: ", data);
    }
}

class Admin extends User {
    constructor (name,email) {
        super(name,email);
    }
    editData() {
        data = "Some New Value"
    }
}

let stud1 = new User("Pallavi","abc@gmail.com");
let stud2 = new User("Kapila","def@gmail.com");

let teacher1 = new User("Dean" ,"dean@college.com");

let admin1 = new Admin("admin","admin@college.com");