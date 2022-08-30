// class Manager tests
const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("should set office number", () => {
        const testValue = 1;
        const m = new Manager("name", 1, "test@test.com", testValue);
        expect(m.officeNumber).toEqual(testValue);
    });

    it("should return office number", () => {
        const testValue = 1;
        const m = new Manager("name", 1, "test@test.com", testValue);
        expect(m.getOfficeNumber()).toEqual(testValue);
    });

    it("should return Manager", () => {
        const testValue = "Manager"
        const m = new Manager("name", 1, "test@test.com", 1);
        expect(m.getRole()).toEqual(testValue);
    });
})