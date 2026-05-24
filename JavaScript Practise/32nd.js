console.log("hello");
console.dir(window);
console.dir(window.document);
console.dir(document.body);
console.log(document.body);
console.dir(document.body.childNodes[3].innerText = "hello");
let header = document.getElementById("heading1");
console.dir(header);

let headers = document.getElementsByClassName("heading-class");
console.dir(headers)

let button = document.getElementById("myId");
console.dir(button);

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

let firstEl = document.querySelector("#myId");
console.dir(firstEl);

let allEl = document.querySelectorAll(".heading-class");
console.dir(allEl)

console.log(firstEl);
console.log(firstEl.tagName);

console.dir(document.querySelector("div"));
console.dir(document.querySelector("div").children);