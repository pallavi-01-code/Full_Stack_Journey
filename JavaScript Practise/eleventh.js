let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

let div = document.querySelector("div");
// div.append(newBtn); //it will add buton at the end of the text of div
//div.prepend(newBtn); //it will display button at the start of the div
//div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hey, I am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();