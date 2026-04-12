let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");       // add new
        body.classList.remove("light");   // remove old
        //document.querySelector("body").style.backgroundColor = "#0D0D0D";
    } else {
        currMode = "light";
        body.classList.add("light");     // add new
        body.classList.remove("dark");   // remove old
        // document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});