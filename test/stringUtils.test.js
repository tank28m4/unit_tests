import { expect } from 'chai';
import { capitalize, reverseString, isPalindrome } from '../src/stringUtils.js';

describe('stringUtils', () => {
  it('should capitalize a string', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should throw if capitalize receives number', () => {
    expect(() => capitalize(123)).to.throw();
  });

  it('should throw if capitalize receives array', () => {
    expect(() => capitalize(['a'])).to.throw();
  });

  it('should reverse a string', () => {
    expect(reverseString('abc')).to.equal('cba');
  });

  it('should throw if reverseString receives object', () => {
    expect(() => reverseString({})).to.throw();
  });

  it('should throw if reverseString receives boolean', () => {
    expect(() => reverseString(false)).to.throw();
  });

  it('should check for palindrome (true case)', () => {
    expect(isPalindrome('madam')).to.be.true;
  });

  it('should check for palindrome (false case)', () => {
    expect(isPalindrome('hello')).to.be.false;
  });

  it('should throw if isPalindrome receives number', () => {
    expect(() => isPalindrome(12321)).to.throw();
  });

  it('should throw if isPalindrome receives array', () => {
    expect(() => isPalindrome(['a', 'b'])).to.throw();
  });
});