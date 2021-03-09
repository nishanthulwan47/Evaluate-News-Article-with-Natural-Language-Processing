import {checkForName} from '../src/client/js/nameChecker'

describe("test to make sure input is url", ()=>{
    test("test the checkForName() function", ()=>{
        expect(checkForName("hello")).toBe(false);
    })
})