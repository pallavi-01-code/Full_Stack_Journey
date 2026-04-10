let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let fname = div.getAttribute("name");
console.log(fname);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let paras = document.querySelector("p");
console.log(para.setAttribute("class","newclass"));


console.log(div.style); 
div.style.backgroundColor = "green";
// div.style.visibility = "hidden";
console.log(div.style); 


div.style.fontSize = "26px";
div.innerText = "Hello"; // to change the value