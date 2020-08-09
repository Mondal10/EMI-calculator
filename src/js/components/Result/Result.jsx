import React from 'react';

import styled from 'styled-components';

import PieChart from '../PieChart/PieChart';

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  padding: 2%;
  border-radius: 20px;
  color: #232627;
  justify-content: space-between;
  background-color: #ededf2;
`;

const ValuesContainer = styled.div`
  width: auto;
`;

const Value = styled.div`
  padding: 2% 0;
`;

const ChartContainer = styled.div`
  width: auto;
  padding: 2%;
  margin: 20px auto;
  border-radius: 20px;
  background-color: #232627;
`;

function Result({ resultObj, amount }) {
  const { loanEMI, totalInterestToPay, totalPayment } = resultObj;

  // % calculation of Principal Loan Amount and Total Interest
  const principalLoanAmt = parseFloat(((amount / totalPayment) * 100).toPrecision(4));
  const totalInterest = 100 - principalLoanAmt;

  // Convert to INR format with symbol
  const rupeeFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  })

  return (
    <ResultContainer>
      <ValuesContainer>
        <Value id="loanEmi">
          Loan EMI: {loanEMI ? rupeeFormatter.format(loanEMI) : null}
        </Value>
        <Value id="totalInterest">
          Total Interest Payable: {totalInterestToPay ? rupeeFormatter.format(totalInterestToPay) : null}
        </Value>
        <Value id="totalPayment">
          Total Payment: {totalPayment ? rupeeFormatter.format(totalPayment) : null}
        </Value>
      </ValuesContainer>
      <ChartContainer>
        <PieChart principalLoanAmt={principalLoanAmt} totalInterest={totalInterest} />
      </ChartContainer>
    </ResultContainer>
  )
}

export default Result;
