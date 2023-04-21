
//1. an imput that takes info... name, title of project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. when title is intred it is displayed as the title of the README. 

//2. input for description, installation instructions, usage information, contribution guidelines, and test instructions.(this will go in the array called "the meat and potatoes") then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests.

//3. a list of options for license (this will go in the array called "the meat and potatoes") then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under.

//4. an imput that asks for their GitHub username (this will go in the array called "the meat and potatoes") then this is added to the section of the README entitled Questions, with a link to their GitHub profile.

//5. an imput that asks for their email address (this will go in the array called "the meat and potatoes") then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions.

//5 a table of contents that links to the corresponding sections of the README (this will go in the array called "the meat and potatoes") then this is added to the section of the README entitled Table of Contents.



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your project's name?",
        name: "project",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },

];
//need to dest the answers?? maybe??

async function promptUser(){
    const answers = await inquirer.prompt(questions)

    const { name, project, description, installation, tests, usage, contributing, license, github, email } = answers;

    const tableOfContents = `
    Table of Contents
    -----------------
    Name: ${name}
    Project: ${project}
    Description: ${description}
    Installation: ${installation}
    Tests: ${tests}
    Usage: ${usage}
    Contributing: ${contributing}
    License: ${license}
    GitHub Username: ${github}
    Email: ${email}
  `;

  console.log(tableOfContents);

  return answers;
}


// TODO: Create a function to initialize app
function init() {
    promptUser()
      .then((answers) => generateMarkdown(answers))
      .then((markdown) => writeToFile('README.md', markdown))
      .catch((err) => console.error(err));
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log(`Successfully wrote to ${fileName}`)
    );
}

// Function call to initialize app
init();




