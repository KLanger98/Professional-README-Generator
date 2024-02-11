// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
      type: 'input',
      message: 'What is the title for your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation for this project?',
      name: 'projectMotivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'buildIncentive',
    },
    {
      type: 'input',
      message: 'What problem does this project solve?',
      name: 'problemSolved',
    },
    {
      type: 'input',
      message: 'What did you learn?',
      name: 'lessonLearnt',
    },
    {
      type: 'input',
      message: 'Please outline how the installation details for this project',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please outline the usage details of this project',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please outline how to contribute to this project',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Please provide details about the tests of your project',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Choose a license',
      name: 'license',
      choices: ["None", "MIT", "Apache", "Boost",  "GNU", "ISC", "Mozilla", "Unlicense"]
    },
    {
      type: 'list',
      message: 'Choose an Apache license',
      name: 'specificLicense',
      when: (response) => response.license === "Apache",
      choices: ["Apache 2.0 License"]
    },
    {
      type: 'list',
      message: 'Choose a Boost license',
      name: 'specificLicense',
      when: (response) => response.license === "Boost",
      choices: ["Boost Software License 1.0"]
    },
    {
      type: 'list',
      message: 'Choose a GNU license',
      name: 'specificLicense',
      when: (response) => response.license === "GNU",
      choices: ["GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3"]
    },
    {
      type: 'list',
      message: 'Choose an ISC license',
      name: 'specificLicense',
      when: (response) => response.license === "ISC",
      choices: ["ISC License (ISC)"]
    },
    {
      type: 'list',
      message: 'Choose an MIT license',
      name: 'specificLicense',
      when: (response) => response.license === "MIT",
      choices: ["The MIT License"]
    },
    {
      type: 'list',
      message: 'Choose a Mozilla license',
      name: 'specificLicense',
      when: (response) => response.license === "Mozilla",
      choices: ["Mozilla Public License 2.0"]
    },
    {
      type: 'list',
      message: 'Choose an Unlicense license',
      name: 'specificLicense',
      when: (response) => response.license === "Unlicense",
      choices: ["The Unlicense"]
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'githubUsername',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    let markdown = generateMarkdown(data);

    fs.writeFile(fileName, markdown, (err) =>
  err ? console.error(err) : console.log('Success!')
);
    
}


// TODO: Create a function to initialize app
function init() {
inquirer
    .prompt(questions)
    
    .then((response) =>
        writeToFile("README.md", response)
    )
}

// Function call to initialize app
init();
