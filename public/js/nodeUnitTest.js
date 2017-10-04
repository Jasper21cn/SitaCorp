// NodeJS Unit Testing Samples

// var assert = require('assert');
// function add(a,b) {
//     return a + b;
// }
// var expected = add(1,3); // throws error if (1,2)
// assert(expected === 4, 'one plus three = 4');

//------------------------------------------------------

// var assert = require('chai').assert;
// var foo = 'bar';
// var beverages = { tea: ['chai', 'matcha', 'oolong']};
//
// assert.typeOf(foo, 'string', 'foo is a string'); // throws error if 'number'
// assert.equal(foo, 'bar', 'foo equal `bar`');
// assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
// assert.lengthOf(beverages.tea, 3, 'beverages has 3 types');

// ------------------------------------------------------
// expect style
//
// var expect = require('chai').expect;
// var foo = 'bar';
// var beverages = { tea: ['chai', 'matcha', 'oolong']};
//
// expect(foo).to.be.a('string');
// expect(foo).to.equal('bar');
// expect(foo).to.have.length(3);
// expect(beverages).to.have.property('tea').with.length(3);

// -------------------------------------------------------------
// Should Style

var should = require('chai').should();
var foo = 'bar';
var beverages = { tea: ['chai', 'matcha', 'oolong']};

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.length(3);
beverages.should.have.property('tea').with.length(3);