// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters to include in your logo:',
    },
    {
      type: 'input',
      name: 'text-color',
      message: 'What text color do you want the logo to have?',
    },
    {
        type: 'input',
        name: 'background-color',
        message: 'What background color do you want the logo to have?',
    },
    {
      type: 'list',
      message: 'What shape would you like your logo to be?',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],
    },
  ])
  .then((data) => {
    


    fs.writeFile('logo.svg', JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success! Review your logo in logo.svg')
    );
  });
