const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const questions = {
    manager: [
        {
            name: "managerName",
            type: "input",
            message: "What is the manager's name?"
        },
        {
            name: "managerId",
            type: "input",
            message: "What is the manager's ID?"
        },
        {
            name: "managerEmail",
            type: "input",
            message: "What is the manager's email address?"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?"
        }
    ],

    engineer: [
        {
            name: "engineerName",
            type: "input",
            message: "What is the engineer's name?"
        },
        {
            name: "engineerId",
            type: "input",
            message: "What is the engineer's ID?"
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "What is the engineer's email address?"
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?"
        }
    ],

    intern: [
        {
            name: "internName",
            type: "input",
            message: "What is the intern's name?"
        },
        {
            name: "internId",
            type: "input",
            message: "What is the intern's ID?"
        },
        {
            name: "internEmail",
            type: "input",
            message: "What is the intern's email address?"
        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern go to?"
        }
    ],

    addEmployee: [
        {
            name: "addEmployee",
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["Add Engineer", "Add Intern", "Done creating team"]
        }
    ]
};

function start() {
    inquirer.prompt(questions.manager).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        addMember(manager, [], []);
    });
}

function addMember(manager, engineers, interns) {
    inquirer.prompt(questions.addEmployee).then(data => {
        if (data.addEmployee === "Add Engineer") {
            inquirer.prompt(questions.engineer).then(data => {
                const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
                engineers.push(engineer);
                addMember(manager, engineers, interns);
            })
        } else if (data.addEmployee === "Add Intern") {
            inquirer.prompt(questions.intern).then(data => {
                const intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
                interns.push(intern);
                addMember(manager, engineers, interns);
            })
        } else {
            console.log("Managers:" + JSON.stringify(manager));
            console.log("Engineers:" + JSON.stringify(engineers));
            console.log("Interns:" + JSON.stringify(interns));
        }
    })
}

start();