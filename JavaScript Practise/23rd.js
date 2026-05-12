let promise = new Promise((resolve, reject) => { 
    console.log("I am a promise");
    reject("Some Error Occurred");
    //resolve("success");
    //resolve(123);
})

function getData(dataId, getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data: ",dataId);
            if(getNextData) {
                getNextData();
            }
        }, 2000);
    })
}