for(let count = 1; count<=5; count++){
     console.log("Pallavi");
}
console.log("Loop Ended");

//calculate sum of 1 to n numbers
let sum=0;
for(let i = 1; i<=5; i++){
    sum += i;
}
console.log("Sum: ", sum);
console.log("Loop Ended");

/* Infinite loop

for(let i = 1; i >= 0;i++) {
    console.log("i: ", i);
}
    */

//while loop

let i =1;
while(i<=5){
    console.log("i: ", i);
    i++;
}

//do while
let j = 20;
do{
    console.log("Pallavi");
    j++;
}while(j<=10);

// for of loop
let str = "PallaviKapila"
let size = 0;
for(let val of str){
    //iterator -> characters
    console.log("Char:" ,val);  
    size++;
}
console.log("String size: ", size);

//for in loop ->returns object keys
let student = {
    fname: "Pallavi Kapila",
    age: 26,
    cgpa: 7.5,
    isPass: true
};

for(let key in student){
    console.log("Key: ", key , "Value: ", student[key]);
}

//Practise Question
console.log("Even numbers from 1 to 100")
for(let count=0 ; count<=100 ; count++){
    if(count % 2 === 0){
        console.log(count);
    }
}

//Practise Question2
let gameNumber = 24;

let userInp = prompt("Guess the game Number: ");
while(userInp != gameNumber){
    userInp = prompt("You guessed the wrong number, try again ");
}
console.log("Congratulations, you guessed the correct number");

