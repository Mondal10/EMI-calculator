import React from 'react';
import renderer from 'react-test-renderer';
import Result from './Result';

describe("Result Snapshot", () => {
  const loanAmount = 1000000;
  const resultObj = {
    loanEMI: 13493,
    totalInterestToPay: 619220,
    totalPayment: 1619220,
  };

  it('Result rendered successfully', () => {
    const tree = renderer.create(<Result resultObj={resultObj} amount={loanAmount} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
