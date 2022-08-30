// class Engineer tests
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should set GitHub", () => {
        const testValue = "GitHub user";
        const e = new Engineer("name", 1, "test@test.com", testValue);
        expect(e.github).toEqual(testValue);
    });

    it("should return GitHub username", () => {
        const testValue =  "GitHub user";
        const e = new Engineer("name", 1, "test@test.com", testValue);
        expect(e.getGithub()).toEqual(testValue);
    });

    it("should return Engineer", () => {
        const testValue = "Engineer"
        const e = new Engineer("name", 1, "test@test.com", "GitHub user");
        expect(e.getRole()).toEqual(testValue);
    });
})
