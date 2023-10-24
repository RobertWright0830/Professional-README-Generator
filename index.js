// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?\n',
        name: 'title',
    },
    {
        type: 'input',
        message: 'DESCRIPTION with motivation, why you built it, and what it solves:\n ',
        name: 'description',
    },
    {
        type: 'input', 
        message: 'Provide INSTALLATION steps:\n ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide USAGE instructions:\n ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide CREDITS, including GitHub profiles of collaborators, third-party assets or tutorial links: \n',
        name: 'credits',
    },
    {
        type: 'input', 
        message: 'Include recommended TESTS and examples on how to run them: \n',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select a license for your application: \n',
        choices: ['Apache-2.0', 'GPL-3.0', 'MIT', 'BSD-2-Clause', 'BSD-3-Clause', 'BSL-1.0', 'EPL-2.0', 'AGPL-v3', 'GPL-2.0', 'LGPL-2.1', 'MPL-2.0', 'Unlicense', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username: \n',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Enter your email address: \n',
        name: 'email',
    },
];

//Function to write README file
function writeToFile(title, data) {
    const randomNumber = Math.floor(Math.random() * 10000);
    const folderName = `${title}_${randomNumber}`
    const fileName = `${folderName}/README.md`;
    
    fs.mkdirSync(folderName);

    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// Function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((responses) => {
            const readmeInformation = generateMarkdown(responses);
            writeToFile(responses.title, readmeInformation);
        });
}

// Function call to initialize app
init();
