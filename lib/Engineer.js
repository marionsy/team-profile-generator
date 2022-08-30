// Engineer class function that extends class Employee with the additional properties and methods: github, getHitHub(), and getRole()
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    // Overridden to return 'Engineer'
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;