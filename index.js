
const inquirer = require("inquirer");
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username? "
        },

        {
            type: "input",
            name: "title",
            message: "What is the Project title? "
        },
        {
            type: "input",
            name: "description",
            message: "What is the Project description? "
        },
        {
            type: "input",
            name: "contents",
            message: "List the Table of Contents: "
        },
        {
            type: "input",
            name: "installation",
            message: "What are your installation instructions:"
        },
        {
            type: "input",
            name: "usage",
            message: "List your usage: "
        },
        {
            type: "list",
            name: "license",
            message: "select your license: ",
            choices:["mit","apache-2.0","cc","gpl","zlib"]
            // change to selection of licence types
        },
        {
            type: "input",
            name: "contributing",
            message: "List any contributions: "
        },
        {
            type: "input",
            name: "test",
            message: "List any tests: "
        },
        {
            type: "input",
            name: "image",
            message: "Provide a link to your GitHub profile picture: "
        },
        {
            type: "input",
            name: "email",
            message: "What is your GitHub email? "
        },
        {
            type: "input",
            name: "repo",
            message: "What is your repository URL? "
        },
        {
            type: "number",
            name: "version",
            message: "What the version number? "
        }


        // add version badge selection object, make it mandatorily a integer

    ]).then(function (info) {

        fs.writeFile("README.md", generateMD(info), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Readme File has been successfully generated!");
        })

        // what if user doesn't answer a question? Find a way to not include category 

        function generateMD(info) {

            return `# Project Title: ${info.title}
            ![Shields Version] (https://img.shields.io/badge/version-${info.version}-blue.svg?cacheSeconds=2592000" />
            ![GitHub license](https://img.shields.io/badge/license-${info.license}-blue.svg)
            ## Description:
            ${info.description}

            ## Table of Contents:
            ${info.contents}

            ## Installation:
            ${info.installation}

            ## Usage:
            ${info.usage}

            ## License:
            ${info.license}

            ## Contributing:
            ${info.contributing}

            ## Tests:
            ${info.test}

            ![User Profile Picture](${info.image})

            ## GitHub Email: 
            GitHub: ${info.email}
            Repository: ${info.repo}`

        };

    })