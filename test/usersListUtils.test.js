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

  it('should sort users by name', () => {
    expect(sortUsersByName(users).map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
  });

  it('should find user by id', () => {
    expect(findUserById(users, 2)).to.deep.equal(users[1]);
    expect(findUserById(users, 99)).to.be.null;
  });

  it('should check if email is taken', () => {
    expect(isEmailTaken(users, 'alice@mail.com')).to.be.true;
    expect(isEmailTaken(users, 'unknown@mail.com')).to.be.false;
  });

  it('should throw error if input is not array', () => {
    expect(() => filterUsersByAge({}, 20, 30)).to.throw();
    expect(() => sortUsersByName(null)).to.throw();
    expect(() => findUserById(123, 1)).to.throw();
    expect(() => isEmailTaken("not array", 'email')).to.throw();
  });
});