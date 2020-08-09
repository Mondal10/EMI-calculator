import React from 'react';
import renderer from 'react-test-renderer';
import UserInput from './UserInput';

describe("UserInput Snapshot", () => {
  it('Loan Amount UserInput rendered successfully', () => {
    const tree = renderer.create(<UserInput name='LA' symbol='₹' value='1000000' label='Loan Amount' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Loan Tenure UserInput rendered successfully', () => {
    const tree = renderer.create(<UserInput name='LT' symbol="Mo" value='240' label='Loan Tenure' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
