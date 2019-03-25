const assert = require('assert')
const expect = require('chai').expect

import { fn } from '../src/utils/fn'

class Test {
    zeMethod(name: string, age: number)
    {
        return 3
    }
}

const instanceOfTest = new Test()
const method = instanceOfTest.zeMethod

const argNames = fn.getArgs(method)

describe('Fn suite (function utils)', () => {

    it('function arguments names must be "name" and "age"', () => {
        expect(argNames[0]).to.equal('name')
        expect(argNames[1]).to.equal('age')
    })


})
