import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  font-size: 20px;
  padding: 2%;
  border-radius: 20px;
  color: #ededf2;
  margin-top: 10px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
`;

const TableHead = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  border: 1px solid #7c7e80;
`;

const TableData = styled.td`
  border: 1px solid #7c7e80;
  padding: 8px;
`;

function PaymentDistribution({ monthlyDistribution, yearlyDistribution }) {
  // Convert to INR format with symbol
  const rupeeFormatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  })

  console.log(monthlyDistribution, yearlyDistribution);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHead>Years/Months</TableHead>
            <TableHead>Principal</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>Balance</TableHead>
          </tr>
        </thead>
        <tbody>
          {
            monthlyDistribution.map(({ monthlyInterest, monthlyPrinciple, balance }, i) => (
              <tr key={`Month: ${i + 1}`}>
                <TableData>Month: {i + 1}</TableData>
                <TableData>{rupeeFormatter.format(monthlyPrinciple)}</TableData>
                <TableData>{rupeeFormatter.format(monthlyInterest)}</TableData>
                <TableData>{rupeeFormatter.format(balance)}</TableData>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Container>
  )
}

export default PaymentDistribution;
