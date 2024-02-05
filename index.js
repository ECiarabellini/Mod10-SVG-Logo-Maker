// Runs the application using imports from lib/
const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to 3 characters to include in your logo:',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What text color do you want the logo to have?',
    },
    {
        type: 'input',
        name: 'backgroundColor',
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
    let shape;
    if (data.shape ==='circle'){
        shape = new Circle(data.textColor, data.backgroundColor, data.text)
    }
    else if (data.shape ==='triangle'){
        shape = new Triangle(data.textColor, data.backgroundColor, data.text)
    }
    else if (data.shape ==='square'){
        shape = new Square(data.textColor, data.backgroundColor, data.text)
    };
    console.log('shape', shape)
    const svgText = 
    `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        ${shape.renderText()}
    </svg>`;

    fs.writeFile('logo.svg', svgText, (err) =>
      err ? console.log(err) : console.log('Success! Review your logo in logo.svg')
    );
  });
