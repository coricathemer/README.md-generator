// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  // pass in questions here
  {
    type: 'input',
    message: 'What is the title of your Project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description of your Project.', 
    name: 'description',
  },
  {
    type: 'input',
    message: 'How can a developer install this application for use?', 
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the proper usage of this Project?', 
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What is the licensing of this Project',
    choices: ['MIT', 'Mozilla', 'None'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'Please enter any contributors to this Project.', 
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What are some features that can be run to test the functionality of this application?', 
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your github username?', 
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?', 
    name: 'email',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } 
    console.log('README was created!!');
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log('Started')
  inquirer.prompt(questions).then((answers) => {
    const response = generateMarkdown(answers);
    // renderLicenseBadge
    console.log(answers);
    //make output folder "./output/README.md"
    writeToFile('./output/output.md', response)
  });
}

// Function call to initialize app
init();

