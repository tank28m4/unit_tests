import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';

describe('studentKnowledgeCheckerUtil', () => {
  it('should return true if all answers are correct', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.true;
  });

  it('should return false if any answer is incorrect', () => {
    const student = { q1: 'a', q2: 'c' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false if student has fewer answers', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false if student has more answers', () => {
    const student = { q1: 'a', q2: 'b', q3: 'c' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false if keys are in different order', () => {
    const student = { q2: 'b', q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false if key names are different', () => {
    const student = { q1: 'a', q3: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should handle empty inputs', () => {
    expect(checkStudentKnowledge({}, {})).to.be.true;
  });
});