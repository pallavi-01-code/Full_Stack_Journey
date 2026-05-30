// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000);
// console.log("one");
// console.log("two");


// setTimeout(() => {
//     console.log("hello");
// },4000);

// console.log("three");
// console.log("four");


// function sum(a ,b){
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a,b);
// }

// calculator(2,5, sum);

// const hello = () => {
//     console.log("bye");
// }

// setTimeout(hello , 5000);



// function getData(dataId){
//     console.log("data: ",dataId);
// }

// function getData(dataId , getNextData){
//     setTimeout(() => {
//         console.log("Data: ", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

//callback hell
// getData(1, () => {
//     console.log("Getting data 2 ....");
//     getData(2, () => {
//     console.log("Getting data 3 ....");
//         getData(3 , () => {
//         console.log("Getting data 4 ....");
//             getData(4);
//         });
//     })
// });

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     //reject("Error occured")
// })

// function getData (dataId, getNextData) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//         console.log("Data: ", dataId);
//         resolve("Success")
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
//     })
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("Error occured")
// });
// };

// let promise = getPromise();
// promise.then((result) => {
//     console.log("Promise fulfilled: " , result);
// })

// promise.catch((error) => {
//     console.log("Promise rejected: " , error);
// })

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some confidential data 1");
//             resolve("Success");
//         },4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some confidential data 2");
//             resolve("Success");
//         },4000);
//     });
// }

//promise chaining
 
// console.log("Fetching data1 ...");
// asyncFunc1 ().then((result) => {
//     //console.log(result);
//     console.log("Fetching data2 ...");
//     asyncFunc2 () .then((result) => {
//     // console.log(result);
// })
// })

// console.log("Fetching data1 ...");
// let p1 = asyncFunc1 ();
// p1.then((result) => {
//     //console.log(result);
//     console.log("Fetching data2 ...");
//     let p2 = asyncFunc2 ();
//     p2.then((result) => {
//     // console.log(result);
// })
// })

//promise chaining
// function getData (dataId, getNextData) {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//         console.log("Data: ", dataId);
//         resolve("Success")
//     },3000);
//     })
// }

// getData(1).then((result) => {
//      console.log(result);
//      getData(2).then(() => {
//         console.log(result);   
//      });
// });

//promise chaining
// console.log("Getting data 1 ...")
// getData(1).then((result) => {
// console.log("Getting data 2 ...")
//     return getData(2);
// })
// .then((result) => {
// console.log("Getting data 3 ...")
//     return getData(3);
// })
// .then((result) => {
//     console.log(result);
// });


// async function hello () {
//     console.log("Hello");
// }

function api() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log("Weather Data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData() {
    await api(); //1st
    await api(); //2nd
}

 function getData (dataId) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
        console.log("Data: ", dataId);
        resolve("Success")
    },3000);
    })
}

//async - await
async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

//iife(immediately invoked function expression) function
(async function getAllData() {
    console.log("getting data 1 .....")
    await getData(1);
    console.log("getting data 2 .....")
    await getData(2);
    console.log("getting data 3 .....")
    await getData(3);
})();