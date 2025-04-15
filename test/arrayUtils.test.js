import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('arrayUtils', () => {
  it('should find max value in array', () => {
    expect(findMax([1, 2, 3, 4])).to.equal(4);
  });

  it('should find min value in array', () => {
    expect(findMin([1, 2, 3, 4])).to.equal(1);
  });

  it('should remove duplicates from array', () => {
    expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
  });

  it('should throw error if input is not array', () => {
    expect(() => findMax("not array")).to.throw();
    expect(() => findMin({})).to.throw();
    expect(() => removeDuplicates(null)).to.throw();
  });
});
