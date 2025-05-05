import { expect } from 'chai';
import { filterUsersByAge, sortUsersByName, findUserById, isEmailTaken } from '../src/usersListUtils.js';

describe('usersListUtils', () => {
  const users = [
    { id: 1, name: 'Alice', age: 25, email: 'alice@mail.com' },
    { id: 2, name: 'Bob', age: 30, email: 'bob@mail.com' },
    { id: 3, name: 'Charlie', age: 22, email: 'charlie@mail.com' },
  ];

  it('should filter users by age', () => {
    expect(filterUsersByAge(users, 23, 30)).to.deep.equal([users[0], users[1]]);
  });

  it('should throw if filterUsersByAge receives object', () => {
    expect(() => filterUsersByAge({}, 20, 30)).to.throw();
  });

  it('should throw if filterUsersByAge receives null', () => {
    expect(() => filterUsersByAge(null, 20, 30)).to.throw();
  });

  it('should sort users by name', () => {
    expect(sortUsersByName(users).map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
  });

  it('should throw if sortUsersByName receives null', () => {
    expect(() => sortUsersByName(null)).to.throw();
  });

  it('should throw if sortUsersByName receives number', () => {
    expect(() => sortUsersByName(42)).to.throw();
  });

  it('should find user by id', () => {
    expect(findUserById(users, 2)).to.deep.equal(users[1]);
  });

  it('should return null if user not found by id', () => {
    expect(findUserById(users, 99)).to.be.null;
  });

  it('should throw if findUserById receives non-array', () => {
    expect(() => findUserById("not array", 1)).to.throw();
  });

  it('should check if email is taken (true)', () => {
    expect(isEmailTaken(users, 'alice@mail.com')).to.be.true;
  });

  it('should check if email is taken (false)', () => {
    expect(isEmailTaken(users, 'unknown@mail.com')).to.be.false;
  });

  it('should throw if isEmailTaken receives non-array', () => {
    expect(() => isEmailTaken({}, 'alice@mail.com')).to.throw();
  });
});