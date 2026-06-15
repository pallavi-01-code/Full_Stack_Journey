import chalk from 'chalk';
console.log(chalk.blue('Hello World'));
console.log(chalk.red.bold('This is an error message'));
console.log(chalk.green.underline('This is a success message'));

function sum (a, b){
    return a + b;
}

function multiply(a,b) {
    return a * b;
}
const ans= sum(2,12);
console.log(ans);



