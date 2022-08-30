const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const { generateHtml, createManagerHtml, createEngineersHtml, createInternsHtml } = require("./src/team.js");

// Array of questions to retrieve user input to create objects for a team with one manager, engineers and interns.
// User input validation included
const questions = {
    manager: [
        {
            name: "managerName",
            type: "input",
            message: "What is the manager's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's name."
                }
            }
        },
        {
            name: "managerId",
            type: "input",
            message: "What is the manager's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's ID."
                }
            }
        },
        {
            name: "managerEmail",
            type: "input",
            message: "What is the manager's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's email address."
                }
            }
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the manager's office number."
                }
            }
        }
    ],

    engineer: [
        {
            name: "engineerName",
            type: "input",
            message: "What is the engineer's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's name."
                }
            }
        },
        {
            name: "engineerId",
            type: "input",
            message: "What is the engineer's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's ID."
                }
            }
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "What is the engineer's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's email."
                }
            }
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the engineer's GitHub."
                }
            }
        }
    ],

    intern: [
        {
            name: "internName",
            type: "input",
            message: "What is the intern's name?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's name."
                }
            }
        },
        {
            name: "internId",
            type: "input",
            message: "What is the intern's ID?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's ID."
                }
            }
        },
        {
            name: "internEmail",
            type: "input",
            message: "What is the intern's email address?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's email."
                }
            }
        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern go to?",
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return "Please enter the intern's school."
                }
            }
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

// Initialize's the app and prompt users with manager questions
function createTeam() {
    inquirer.prompt(questions.manager).then(data => {
        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
        addMember(manager, [], []);
    });
}

// Adds engineers and interns to team using the addEmployee object
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
            // If user is done creating the team, the team HTML will be generated
            const managerHtml = createManagerHtml(manager);
            const engineersHtml = createEngineersHtml(engineers);
            const internsHtml = createInternsHtml(interns);

            fs.writeFile("dist/team.html", generateHtml(managerHtml, engineersHtml, internsHtml), (err) =>
                err ? console.error(err) : console.log("Team created!")
            );
        }
    })
}

// Calls function to start app
createTeam();