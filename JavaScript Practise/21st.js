// function hello () {
//     console.log("hello")
// }

// setTimeout(hello , 2000); //setTimeout function also takes callback function


console.log("one");
console.log("two");

setTimeout(() => {
    console.log("bye")
}, 2000)//timeout; 2s = 2000

console.log("three");
console.log("four");

function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b, sumCallback) {
    sumCallback(a,b);
}

calculator(1,2, sum);

//another way inside a callback function we can pass the complete function
calculator(1,2, (a,b ) => {
    console.log(a+b )
})