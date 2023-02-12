import { assert } from 'console';
import { describe } from 'mocha';
import { Obj } from './portfolio';

assert = require('assert');

describe('Obj', ()=>{
    describe('.test', ()=>{
        it('returns a confirmation message', ()=>{
            var expectedResult = 'This works nows';
            var results = Obj.test();

            assert.strictEqual(results, expectedResult);
        })

    })
})