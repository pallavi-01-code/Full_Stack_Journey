//Create a command line interface that lets the user specify a file path 
// and the nodejs process counts the number of words inside it.

const fs = require('fs');
const { Command } = require('commander');
//initialize a program
const program = new Command();

program
  .name('File related CLI')
  .description('CLI to do file based tasks')
   //.version('0.8.0');

//registring the 1st command
program.command('count_lines')
  .description('Count the number of lines in a file')
  //we have an argument called file
  .argument('<file>', 'file to count the number of lines')
  //what happens when CLI is called ny the user
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.command('count_words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let words = 0;
        for(let i = 0; i< data.length ; i ++) {
            if(data[i] === " ") {
                words++;
            }
        }
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.parse();