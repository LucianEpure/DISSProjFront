import { Employee } from './employee';

describe('User', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});
