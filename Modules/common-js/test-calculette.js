'use strict';

const assert = require('assert');
const calc = require('./calculette');

assert.equal(calc.addition(1, 2), 3);
assert.equal(calc.addition(-1, -3), -4);

assert.equal(calc.multiplication(2, 3), 6);
assert.equal(calc.multiplication(-2, -3), 6);
