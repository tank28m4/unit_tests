import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('mathUtils', () => {
  it('adds numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('subtracts numbers', () => {
    expect(subtract(5, 2)).to.equal(3);
  });

  it('multiplies numbers', () => {
    expect(multiply(3, 4)).to.equal(12);
  });

  it('divides numbers', () => {
    expect(divide(10, 2)).to.equal(5);
  });

  it('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
  });
});
