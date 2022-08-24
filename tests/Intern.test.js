const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should set a school", () => {
        const testValue = "ASU";
        const i = new Intern("name", 1, "test@test.com", testValue);
        expect(i.school).toEqual(testValue);
    });

    it("should return a school", () => {
        const testValue = "ASU";
        const i = new Intern("name", 1, "test@test.com", testValue);
        expect(i.getSchool()).toEqual(testValue);
    });

    it("should return Intern", () => {
        const testValue = "Intern"
        const i = new Intern("name", 1, "test@test.com", "ASU");
        expect(i.getRole()).toEqual(testValue);
    });
})