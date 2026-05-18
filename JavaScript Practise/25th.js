//create a counter, it should go up as the time goes by interval of 1 second

let counter = 1;
function callback() {
    console.clear();
    console.log(counter);
    counter++;
}

setInterval(callback , 1000);
