
const assert = require('assert');
const { Obj } = require('./portfolio');

describe('Obj', ()=>{
    describe('.sum', ()=>{
        it('returns the sum of an array', ()=>{
            const expectedResult = 33;
            let testnumbers = [3,6,15,9];
            let results = Obj.sum(testnumbers)

            assert.strictEqual(results, expectedResult)
        })

    })
    describe('printSum', ()=>{
        it('prints a string message showing the sum', ()=>{
            let testVal = 'The sum is 12';
            let message = Obj.printSum(12);

            assert.strictEqual(message, testVal)

        })
    })
    
})
