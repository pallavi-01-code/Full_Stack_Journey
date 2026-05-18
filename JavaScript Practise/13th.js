let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("Button was clicked")
//     let a = 25;
//     a++;
//     console.log(a); 
// }
btn1.onclick = (e) => {
    console.log(e); 
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
}

let box = document.querySelector("div")
box.onmouseover = (e) => {
    console.log("You are inside div");
    console.log(e); 
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX , e.clientY);
    
}