// let div = document.querySelector("div");
// console.log(div);

// let idval = div.getAttribute("id");
// console.log(idval)

// let nameval = div.getAttribute("name");
// console.log(nameval)

// let para = document.querySelector(".para");
// // console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));

// div.style.backgroundColor = "purple";
// div.style.backgroundColor = "maroon";
// //div.style.visibility = "hidden";

// div.style.fontSize = "20px";


// div.innerText = "Heeloooo";

let btn = document.createElement("button");
btn.innerText = "Click Me!"
console.log(btn);

let div = document.querySelector("div");
// div.append(btn);
// div.prepend(btn);
// div.before(btn);
div.after(btn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>DOM Part2</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();





