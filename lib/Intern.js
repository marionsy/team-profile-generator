// Intern class function that extends class Employee with the additional properties and methods: school, getSchool(), and getRole()
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // Overridden to return 'Intern'
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;