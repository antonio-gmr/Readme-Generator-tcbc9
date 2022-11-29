// GET THE GLOBAL REQUIRES 

const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utility/markdownGenerator');
// set the questions and names with the inquirer syntax

    inquirer
        .prompt([

        {
            type: 'input',
            message: "Project title?",
            name: 'projectTitle',
        },

        {

            type: 'input',
            message: "Describe the project?",
            name: 'description',
        },

        {

            type: 'input',
            message: "How do you install the project?",
            name: 'installation',
        },

    
        {

            type: 'input',
            message: "Are there any contribution guidelines?",
            name: 'projectContributors',

        },

        {

            type: 'input',
            message: 'Are there any usage restrictions',
            name: 'projectRestrictions',

        },
        {
        
            type: 'input',
            message: 'Test will be use?',
            name: 'test',
        },

        {

            name: 'input',
            message: 'What is your full name?',
            name: 'author',

        },

        {
            type: 'input',
            message: 'Your Email?',
            name: 'email',
            default: '-- @.me',
        },

        {
            type: 'input',
            message: 'GitHub account?',
            name: 'github',
        },

        {

            type: 'list',
            message: 'what license will you be using?',
            name: 'license',
            choices: ['MPL', 'ISC', 'LOP', 'GPL']
        }
        
        ])

    // function to create the read me with the information 
  .then ((data) => {

fs.writeFile('README.md', markDown(data), (err) => err ? console.log(err) : console.log('Success')
);  

  })


