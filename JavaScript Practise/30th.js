//strings
let str1 = "Pallavi";
let str2 = 'Kapila';
console.log(str1)
console.log(str2);
console.log("Length of string 1: ", str1.length);
console.log("Length of string 2: " , str2.length);
console.log(str1[3]);

let obj = {
    item: "Pen",
    price: 20
};

//console.log("The cost of", obj.item , "is" , obj.price, "rupees");
let output = `The cost of ${obj.item} is Rs.${obj.price}`;
console.log(output);

//template literals
let specialStr = `Hello, how you doing, ${1+2+3}?`;
console.log(specialStr.slice(1,3));
console.log(specialStr);
console.log(typeof(specialStr));
console.log(specialStr.toUpperCase());
console.log(specialStr.toLowerCase());

let str4 = "Good Evening";
let newstr = str4.toUpperCase();
console.log(newstr);
console.log(specialStr.concat(str4));

let str3 = "    yolo  enjoy while you can    ";
let newstr1 = str3.trim();
console.log(newstr1);

let str5 = "hello";
console.log(str5.replace("h","y"));
console.log(str5.replaceAll("l","p"));
console.log(str5.charAt(0))

//practise questiom

let user = prompt("Enter full name without space: ");
username = "@" + user + user.length;
//username = "@" + user.concat(user.length)
console.log(username);