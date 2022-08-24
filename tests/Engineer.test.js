const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("should set GitHub", () => {
        const testValue = "GitHub user";
        const e = new Engineer("name", 1, "test@test.com", testValue);
        expect(e.github).toEqual(testValue);
    })
})
