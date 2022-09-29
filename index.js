// import required packages
const inquirer = require("inquirer");
const fs = require("fs");

// import utils
const utils = require("./utils/generateMarkdown");

// list of question objects for inquirer
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "email",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "project",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contrib",
  },
];

// creates a file with fileName and data provided in parameters
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log(`Successfully generated ${fileName}!`)
  );
}

// uses inquirer package to ask series of questions then
// calls writeToFile function with the responses
function init() {
  inquirer.prompt(questions).then((responses) => {
    const data = utils.generateTemplate(responses);
    writeToFile("output/README.md", data);
  });
}

// Function call to initialize app
init();
