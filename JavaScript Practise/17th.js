const student = {
    fullName : "Pallavi Kapila",
    marks : 95.6,
    printMarks: function () {
        console.log("Marks: ", this.marks);//student.marks
    }
}; 

const employee = {
    calTax1() {
        console.log("Tax rate is 10%");
    },
    //This is another way to define method/function inside object
    calTax2 : function () {
        console.log("Tax rate is 12%");
    }
}

const karanArjun = {
    salary : 500000,
    calTax1() {
       console.log("Tax rate is 20%"); 
    }
};

// const karanArjun2 = {
//     salary : 500000,
// };

// const karanArjun3 = {
//     salary : 500000,
// };

// const karanArjun4 = {
//     salary : 500000,
// };
karanArjun.__proto__ = employee; //this is used to set a prototype, the other object function we can use inside this object
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;