const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const questions = {
    Manager: [
        {
            name: "name",
            type: "input",
            message: "What is your name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is your office number?"
        },
        {
            name: "github",
            type: "input",
            message: "What is your GitHub URL?"
        }
    ],

    Engineer: [
        {
            name: "name",
            type: "input",
            message: "What is your name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?"
        },
        {
            name: "github",
            type: "input",
            message: "What is your GitHub username?"
        }
    ],

    Intern: [
        {
            name: "name",
            type: "input",
            message: "What is your name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is your email address?"
        },
        {
            name: "school",
            type: "input",
            message: "What school do you go to?"
        }
    ]
};
