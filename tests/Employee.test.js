const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee object", () => {
            const obj = new Employee();
            expect(typeof (obj)).toEqual("object");
        });
    });

    it("should set an employee name", () => {
        const name = "name";
        const str = new Employee(name);
        expect(str.name).toEqual(name);
    });

    it("should set an employee id", () => {
        const testValue = 100;
        const e = new Employee("name", testValue);
        expect(e.id).toEqual(testValue);
    });

    it("should set an employee email", () => {
        const testValue = "test@test.com";
        const e = new Employee("name", 1, testValue);
        expect(e.email).toEqual(testValue);
    });

    it("should get name via getName()", () => {
        const testValue = "name"
        const e = new Employee(testValue);
        expect(e.getName()).toEqual(testValue);
    });

    it("should get id via getId()", () => {
        const testValue = 100;
        const e = new Employee("name", testValue);
        expect(e.getId()).toEqual(testValue);
    });

    it("should get an email via getEmail()", () => {
        const testValue = "test@test.com";
        const e = new Employee("name", 1, testValue);
        expect(e.getEmail()).toEqual(testValue);
    });

    it("should return an employee with getRole()", () => {
        const testValue = "Employee";
        const e = new Employee("name", 1, "test@test.com");
        expect(e.getRole()).toEqual(testValue);
    });
})