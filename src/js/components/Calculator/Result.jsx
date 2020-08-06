import React from 'react';

import styled from 'styled-components';

import PieChart from  '../Calculator/PieChart';

const ResultContainer = styled.div`
  display: flex;
  font-size: 20px;
  padding: 2%;
  border-radius: 20px;
  color: #3E4C5F;
  justify-content: space-between;
  background-color: #ededf2;
`;

const ValuesContainer = styled.div`
  width: 50%;
`;

const Value = styled.div`
  padding: 2% 0;
`;

const ChartContainer = styled.div`
  width: 50%;
  padding: 2%;
  border-radius: 20px;
  background-color: #d1e0f5;
`;

function Result({ resultObj, amount }) {
  const { loanEMI, totalInterestToPay, totalPayment } = resultObj;

  // % calculation of Principal Loan Amount and Total Interest
  const principalLoanAmt = parseFloat(((amount / totalPayment) * 100).toPrecision(4));
  const totalInterest = 100 - principalLoanAmt;

  const rupeeFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  })

  return (
    <ResultContainer>
      <ValuesContainer>
        <Value>
          Loan EMI: {loanEMI ? rupeeFormatter.format(loanEMI) : null}
        </Value>
        <Value>
          Total Interest Payable: {totalInterestToPay ? rupeeFormatter.format(totalInterestToPay) : null}
        </Value>
        <Value>
          Total Payment: {totalPayment ? rupeeFormatter.format(totalPayment) : null}
        </Value>
      </ValuesContainer>
      <ChartContainer>
        <PieChart principalLoanAmt={principalLoanAmt} totalInterest={totalInterest}/>
      </ChartContainer>
    </ResultContainer>
  )
}

export default Result;
