const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
module.exports.expect = chai.expect;

chai.Assertion.addMethod('bold', (value) => {
    let bool = value === 'bold' || value === '700' || value === 700;
    new chai.Assertion(bool).to.be.true;
});
