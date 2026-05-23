function myFunction() {
    console.log("Welcome to JS Practise");
    console.log("We are learning JS ;)");
}

myFunction();
console.log()

function myfunc(msg){
    console.log(msg);
}

myfunc("I love JS");

// function to calculate 2 number sum
function sum(num1 , num2){
    s = num1 + num2;
    return s
}

let val = sum(34,78);
console.log("Sum: ",val);

function mul(a, b) {
    return a*b
}

const ArrowSum = (a,b) =>{
    console.log(a+b);
}

ArrowSum(79,67);

const ArrowMul = (a,b) =>{
    return a*b
}

ArrowMul(12,9);

const printHello = () => {
    console.log("hello");
}

//Practise Question
function printVowel(str) {
    let countVowels = 0;
    for(const char of str){
        // console.log(char)
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        countVowels++;
        }
    }
    console.log("Total no of vowels: ", countVowels);
}
printVowel("Pallavikapila");

const numberOfVowels = (string) => {
    let countVowels = 0;
    for(const char of string){
        // console.log(char)
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        countVowels++;
        }
    }
    return countVowels;
}

let arr = [1,3,4,5];
arr.forEach(function printVal (val){ //here val means value at each index
    console.log(val);
})

let arr2 = ["pune" , "delhi" , "mumbai"];

arr2.forEach((val , idx, arr) => {
    console.log(val.toUpperCase() , idx , arr);
})

let num =[20, 56, 34, 18];

let calSquare = val => {
    console.log(val * val);
};

// num.forEach(val => {
//     console.log(val * val);
// })

num.forEach(calSquare);

let newArr = num.map(val => {
    return val * 2;
})

console.log(newArr);

let arr3 = [1,2,3,4,5,6,7,8];

let evenArr = arr3.filter((val) => {
    return val % 2 == 0;
})

console.log(evenArr);

const sumArray = [1,2,3,4];

const sumoutput = sumArray.reduce((previous, current) => {
    return previous + current;
});

console.log(sumoutput);

let largArray = [7,8,12,45,9,214];

const output = largArray.reduce((prev , curr) => {
    return prev > curr ? prev : curr; 
})

console.log(output);

//practise question
let studMarks = [23,45,78,90,89, 97, 36, 98];


let topMarks = studMarks.filter((val) => {
    return val > 90
})

console.log(topMarks);


let n = prompt("Enter a number: ");

let arr5 = [];

for(let i=1;i<=n;i++){
   arr5[i-1] = i;
}

console.log(arr5);

let addArr = arr5.reduce((prev, curr) => {
    return prev + curr;
});

console.log("Sum: ", addArr);

let fact = arr5.reduce((res, curr) => {
    return res * curr;
});

console.log("Factorial: ", fact);