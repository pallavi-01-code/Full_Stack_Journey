let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";


document.querySelector("body").prepend(newBtn);

let para = document.querySelector("p");
para.getAttribute("class");
//para.setAttribute("class" , "newClass"); // this will overwrite hence we will not use setAttribute
//Hence we will use classList
para.classList.add("newClass");
console.log(para.classList);