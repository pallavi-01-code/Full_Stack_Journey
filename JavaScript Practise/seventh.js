//alert("DOM part1");
console.log(window);
window.console.log("Hello");
console.dir(document.body);
console.dir(document.head);
document.body.childNodes[1].innerText = "Hello"

let header = document.getElementById("heading"); //h1
console.log(header);
console.dir(header);


let headings = document.getElementsByClassName("myclass");
console.dir(headings);

let headsec = document.getElementsByTagName("h4");
console.dir(headsec);

let firstElement =  document.querySelector("p");
console.dir(firstElement);

let allElements = document.querySelectorAll("p");
console.dir(allElements);

console.dir(document.body.firstChild);

let txt = document.querySelector("body").children;
console.log(txt);