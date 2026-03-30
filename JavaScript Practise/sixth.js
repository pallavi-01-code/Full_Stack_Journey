// var str = "Hello";
// var str = "Yolo"

// console.log(str);


// let string = "How are you";

// {
// let string = "Thank You"
// console.log(string);
// }
// console.log(string);

// const strg = "Welcome";

// console.log(strg)

// {
//     const strg = "I am good"
//     console.log(strg);
// }

// const product = {
//     name : "Parker Jotter Standard CT Ball Pen(Black)",
//     rating: 4,
//     dealOfTheDay: true,
//     priceafterDis: 270,
//     MRP: 285,
//     totalDiscount : "5%"
// }
// console.log(product);


let grades = prompt("Enter number out of 100: ")
if(grades<=100 && grades >= 80){
    console.log("A");
}
else if(grades<=89 && grades >= 70){
    console.log("B");
}
else if(grades<=69 && grades >= 60){
    console.log("C");
}
else if(grades<=59 && grades >= 50){
    console.log("D");
}
else if(grades<=49 && grades >= 0){
    console.log("F")
}
else {
    console.log("Invalid number entered")
}
console.log(grades);
