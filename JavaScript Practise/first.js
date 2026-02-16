let fullName = "Tony Stark"
const $age = 45; 
price = 99.99;
let x = 10;
let y = 20;
var isFollow = true;
const PI = 3.14;
console.log(fullName);
console.log($age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(PI);
typeof fullName;
typeof $age;
typeof price;
typeof x;
typeof y;
typeof isFollow;
typeof PI;
{
    let city = "New York";
    console.log(city);
}
{
    let city = "Los Angeles";
    console.log(city);
    console.log(isFollow);
    typeof city;
}

let favColor = "beige";
const height = 170;
var likePizza = true;
console.log(favColor);
console.log(height);
console.log(likePizza);


function greet(firstName){
    return "Hello, " + firstName;
}

let print = greet("Pallavi");
console.log(print);

function sum(a,b){
    let total = a+b;
    return total;
}

let t_msg = sum(12,34);
let t_msg_2 = sum("1","2");
console.log(t_msg); 
console.log(t_msg_2); 

function canVote(age){
    if(age > 18)
        return "Can vote as age is: " + age;
    else
        return "Can't vote as age is: " + age;
}

let vote = canVote(26);
let vote_2 = canVote(17);
console.log(vote);
console.log(vote_2);

let users = ["Pankaj","Poonam","Parbhat","Pallavi","Kapila"];
let total_users = users.length;
for(let i=0;i<total_users;i++){
    console.log(users[i]);
}

function evenOdd(num){
    if(num%2==0){
        console.log("Number is Even");
    }
    else{
        console.log("Number is odd");
    }
}

let numb = evenOdd(22);
let numb2 = evenOdd(15);

let user1 = {
    fname: "Pallavi",
    age: 26,
    gender: "female"
}

console.log(user1.fname);
console.log(user1["age"]);


function greett(user){
    console.log("Hi, "+user.fname+" your age is "+user.age);
}
let user2 = {
    fname: "Pallavi",
    age: 26
}

greett(user2);

function greett3(user){
    console.log("Hi,"+user.title+" "+user.fname+", your age is "+user.age);
    if(user.age > 18){
        console.log("Can vote");
    }else{
        console.log("Can't vote")
    }
}
let user3 = {
    fname: "Pallavi",
    age: 26,
    title: "Ms."
}

greett3(user3);

let arr = ["pallavi", 26 , {
    name: "pallavi",
    age: 26,
    cities: ["nangal","himachal","bengaluru"]
}]

console.log(arr[2]);
console.log(arr[2].cities);

//create a function that takes an array of objects as input and returns the users whose age>18 and gender is male

function solve(arr){
    //approach1
//    let arr2 = [];
//    for(let i=0;i<arr.length;i++){
//     if(arr[i].age > 18 && arr[i].gender == "male")
//         arr2.push(arr[i]);
//    }
//    return arr2;

//approach 2
   return arr.filter(user => user.age > 18 && user.gender === "male");
}

const userz= [{
    name: "Pallavi",
    age: 26,
    gender: "female"
},{
    name: "Parbhat",
    age:24,
    gender:"male"
},
{
    name: "Pankaj",
    age:55,
    gender:"male"
}];

console.log(solve(userz));