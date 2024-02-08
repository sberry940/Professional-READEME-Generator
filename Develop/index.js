// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please name your project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the functionality and purpose of this project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license for this project.',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'require',
        message: 'List any project dependencies here.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'State the languages or technologies associated with this project.',
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
