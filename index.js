const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./template");

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "project",
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
    message: "What does the user need to know about using repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contrib",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const data = template.createTemplate(responses);
    writeToFile("test.md", data);
  });
}

// Function call to initialize app
init();
