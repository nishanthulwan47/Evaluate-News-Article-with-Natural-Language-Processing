import {handleSubmit} from '../src/client/js/formHandler';

describe("test for submit functionality", ()=>{
    test("test the handleSubmit() function", ()=>{
        expect(handleSubmit).toBeDefined();
    })
})