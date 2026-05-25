let heading = document.querySelector("h2");

console.dir(heading.innerText);

heading.innerText += " from Kapila sessions"; //concatenate
console.dir(heading.innerText);

let div_class = document.querySelectorAll(".box");

console.dir(div_class);
console.log(div_class);
console.log(div_class[0]);
console.log(div_class[1]);
console.log(div_class[2]);

// console.dir(div_class[0].innerText = "New Unique Value 1");
// console.dir(div_class[1].innerText = "New Unique Value 2");
// console.dir(div_class[2].innerText = "New Unique Value 3");

let idx = 1;
for(let div of div_class){
    // console.log(div.innerText)
    div.innerText = `New Unique Value ${idx}`;
    idx++;
}