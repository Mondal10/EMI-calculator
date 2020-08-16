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
  margin: 10px auto;
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

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHead>Years</TableHead>
            <TableHead>Principal</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>EMI</TableHead>
            <TableHead>Balance</TableHead>
          </tr>
        </thead>
        <tbody>
          {
            yearlyDistribution.map(({ yearlyInterest, yearlyPrinciple, balance }, i) => (
              <tr key={`Year: ${i + 1}`}>
                <TableData>Year: {i + 1}</TableData>
                <TableData>{rupeeFormatter.format(yearlyPrinciple)}</TableData>
                <TableData>{rupeeFormatter.format(yearlyInterest)}</TableData>
                <TableData>{rupeeFormatter.format(yearlyPrinciple + yearlyInterest)}</TableData>
                <TableData>{rupeeFormatter.format(balance)}</TableData>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <TableHead>Months</TableHead>
            <TableHead>Principal</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>EMI</TableHead>
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
                <TableData>{rupeeFormatter.format(monthlyPrinciple + monthlyInterest)}</TableData>
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
