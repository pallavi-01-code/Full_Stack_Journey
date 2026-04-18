//nesting if else

// let age = 25;
// if (age>=18){
//     if(age>=60) {
//         console.log("Senior");
//     } else {
//         console.log("Adult");
//     }
// } else{
//     console.log("Child");
// }

//nesting loop

// for(let i=0; i<5;i++) {
//     let str = "";
//     for(let j=0;j<5;j++){
//         str += j; 
        
//     }
//     console.log(i, str);
// }

function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("Data: ",dataID);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

//this is known as nested callbacks hence it is a callback hell 
//to solve callback hell situation we have 
getData(1, () => {
    console.log("Getting data 2 ....")
    getData(2 , () => {
    console.log("Getting data 3 ....")
        getData(3, () => {
    console.log("Getting data 4 ....")
            getData(4, () => {
    console.log("Getting data 5 ....")
                getData(5);
            })
        })
    }); 
});

