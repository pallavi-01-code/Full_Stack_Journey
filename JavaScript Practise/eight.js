let div = document.querySelector("div");
console.dir(div);
console.dir(div.innerText);
console.dir(div.innerHTML);

let heading = document.querySelector("h1");
//console.dir(heading);
//console.log(heading);
//heading.innerText = "Latest Heading";
heading.innerHTML = "<i>Latest Heading</i>";
console.log(heading);

console.log(heading.textContent);