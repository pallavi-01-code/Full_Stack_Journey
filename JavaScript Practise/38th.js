const URL = "https://meowfacts.herokuapp.com/"
const factPara = document.querySelector("#fact");
const factbtn = document.querySelector("#btn");

//using async await is a better approach
const getFacts = async() => {
    console.log("Getting data ....");
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data.data;
}

//promise chaining
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data.data;
//     })
// }

factbtn.addEventListener("click", getFacts);