import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('stringUtils', () => {
  it('should capitalize a string', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should reverse a string', () => {
    expect(reverseString('abc')).to.equal('cba');
  });

  it('should check for palindrome', () => {
    expect(isPalindrome('madam')).to.be.true;
    expect(isPalindrome('hello')).to.be.false;
  });

  it('should throw error if input is not string', () => {
    expect(() => capitalize(123)).to.throw();
    expect(() => reverseString([])).to.throw();
    expect(() => isPalindrome({})).to.throw();
  });
});