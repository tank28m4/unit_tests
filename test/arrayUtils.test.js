import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('arrayUtils', () => {
  it('should find max value in array', () => {
    expect(findMax([1, 2, 3, 4])).to.equal(4);
  });

  it('should throw if findMax receives string', () => {
    expect(() => findMax("not array")).to.throw();
  });

  it('should throw if findMax receives null', () => {
    expect(() => findMax(null)).to.throw();
  });

  it('should find min value in array', () => {
    expect(findMin([1, 2, 3, 4])).to.equal(1);
  });

  it('should throw if findMin receives object', () => {
    expect(() => findMin({})).to.throw();
  });

  it('should throw if findMin receives boolean', () => {
    expect(() => findMin(false)).to.throw();
  });

  it('should remove duplicates from array', () => {
    expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
  });

  it('should throw if removeDuplicates receives null', () => {
    expect(() => removeDuplicates(null)).to.throw();
  });

  it('should throw if removeDuplicates receives string', () => {
    expect(() => removeDuplicates("123")).to.throw();
  });
});