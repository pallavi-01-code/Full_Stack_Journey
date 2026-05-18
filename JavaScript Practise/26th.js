const chalk = require('chalk');
console.log(chalk);

function sum(a,b) {
    return a + b;
}

const ans = sum(2,4);
console.log(ans);

function multiply(a,b) {
    return a*b;
} 

const answer = multiply(7,8);
console.log(answer);

console.log(chalk.blue("Hello World!"));
console.log(chalk.red.bold("This is a error message"));
console.log(chalk.green.underline("This is a success message"));

const path = require('path');
console.log(__dirname);
console.log(path.join(__dirname + "/26th.js"));
console.log(path.join(__dirname, "26th.js"));