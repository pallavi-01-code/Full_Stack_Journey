let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students"; 


let divs = document.querySelectorAll(".box");
console.log(divs) 
//console.log(divs[0]); //for indiidual divs
divs[0].innerText = "Unique Value 1";
divs[1].innerText = "Unique Value 2";
divs[2].innerText = "Unique Value 3";


// let index = 1;
// for(div of divs){
//     div.innerText = `Unique value ${index}`;
//     index++;
// }