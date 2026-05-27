let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!"

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").append(newBtn );

let para = document.querySelector("p");
//para.getAttribute;
//setAttribute overwrites the newclass
//para.setAttribute("class" , "newClass"); 
para.classList.add("newClass");