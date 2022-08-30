// Manager class function that extends class Employee with the additional properties and methods: officeNumber, getOfficeNumber(), and getRole()
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    // Overridden to return 'Manager'
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;