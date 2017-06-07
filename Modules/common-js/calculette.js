'use strict';

const convertToNumber = function(value) {
    return Number(value);
};

module.exports.addition = function(a, b) {
    return convertToNumber(a) + convertToNumber(b);
};

exports.multiplication = function(a, b) {
    return a * b;
};
