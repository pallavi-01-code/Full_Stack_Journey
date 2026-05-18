let heroes  = ["Captain America" , "Ironman" , "Thor" , "Hulk" , "Doctor Strange", "Hawkeye" , "Black Widow" , "Black Panthar", "Spiderman" , "Captain Marvel" ,  "Falcon",  "Antman" , "Scarlet Witch" , "Vision"]; 
console.log(heroes);

let size = heroes.length
console.log("Avenger's Army");
for(let i=0; i<size; i++){
    console.log(heroes[i]);
}
 
//for of loop
console.log("\nAvenger Squad")
for(let  elements of heroes){
     console.log(elements);
}

console.log("\nMetropolitian Cities")
let cities = ["Bengaluru" , "Hyderabad" , "Noida" , "Gurgaon" , "Pune" , "Delhi" , "Mumbai" , "Surat"];
for(let  city of cities){
    console.log(city.toUpperCase());
}

let marks = [85,97,44,37,76,60];
let total = marks.length;
let sum=0, avg;
for(let i = 0; i<total;i++){
    sum += marks[i];
    avg = sum/total;
}
console.log(`Average of marks of all students: ${avg}`); 


/*Another way
 
let sum =0;
for(let val of marks){
    sum += val;
}
let avg = sum/marks.length; 
console.log(`Average of marks of all students: ${avg}`); 
*/

let price = [250,600,300,900,50];
console.log("Price of items: ", price);
for(let i=0; i<price.length;i++){
    let offer = price[i]/10;
    price[i] -= offer;
}
console.log("Price after offer: ", price);


let foodItems = ["potato" , "litchi" , "mango" , "peas" , "tomato"];
let score = [67,89,90]
foodItems.push("panner", "soya" , "chickpeas");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log(deletedItem);
console.log(foodItems.toString());
console.log(score);
console.log(score.toString());

let marvel_heroes = ["Thor" , "Ironman" , "Hulk" , "Captain America"];
let dc_heroes = ["superman" , "batman"]
let indian_heroes = ["shaktiman" , "krish"]
marvel_heroes.unshift("Doctor Strange");
marvel_heroes.shift();

let heroes_gang = marvel_heroes.concat(dc_heroes, indian_heroes);
console.log(heroes_gang);

console.log(marvel_heroes.slice(1,3));//ending index is not inclusive

let arr = [1,4,5,6,8,9];
console.log(arr);
// arr.splice(2,2,45,89);
//to add element
// arr.splice(2,0,97);  
//to delete element
// arr.splice(3,1);
//to  replace element
arr.splice(3,1,101);
console.log(arr);
arr.splice(4);
console.log(arr);

let companies = ["Bloomberg", "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(companies);
//remove the first company from the array
companies.shift();
console.log(companies);
//remove uber and add ola in its place
companies.splice(1,1,"Ola");
console.log(companies);
//add amazon at the end
companies.push("Amazon");
console.log(companies);