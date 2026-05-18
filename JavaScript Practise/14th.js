let btn = document.querySelector("#btn1");
btn.addEventListener("click", (e) => {
    console.log("Button 1 was clicked - handler no 1");
    // console.log(e);
    // console.log(e.type);
})

 btn.addEventListener("click", () => {
    console.log("Button 1 was clicked -  handler no 2");
})

const handler3 = () => {
    console.log("Button 1 was clicked -  handler no 3");
}
btn.addEventListener("click", handler3);

btn.addEventListener("click", () => {
    console.log("Button 1 was clicked -  handler no 4");
})

btn1.removeEventListener("click", handler3);