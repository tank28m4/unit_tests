import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('adds numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });

    it('handles non-numeric input', () => {
      expect(add("2", 3)).to.equal("23");
    });
  });

  describe('subtract', () => {
    it('subtracts numbers', () => {
      expect(subtract(5, 2)).to.equal(3);
    });

    it('handles non-numeric input', () => {
      expect(subtract("5", 2)).to.equal(3); 
    });
  });

  describe('multiply', () => {
    it('multiplies numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });

    it('handles non-numeric input', () => {
      expect(multiply("3", 4)).to.equal(12);
    });
  });

  describe('divide', () => {
    it('divides numbers', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('throws when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
    });

    it('handles non-numeric input', () => {
      expect(divide("20", 2)).to.equal(10);
    });
  });
});
