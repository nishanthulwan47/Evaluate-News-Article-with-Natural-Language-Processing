// Import the js file to test
import { checkForURL } from "../src/client/js/URLChecker"
// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the name checker functionality", () => {
    test("Testing the checkForName() function", () => {
           expect(checkForURL).toBeDefined();
})
});