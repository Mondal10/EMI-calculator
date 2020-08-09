import React from 'react';

import { Pie } from 'react-chartjs-2';

function PieChart({ principalLoanAmt, totalInterest }) {
  return (
    <Pie data={{
      labels: ['Principal Loan Amount', 'Total Interest'],
      datasets: [
        {
          label: 'EMI',
          backgroundColor: [
            '#139cf7',
            '#1c448a'
          ],
          data: [principalLoanAmt, totalInterest]
        }
      ]
    }} options={{
      title: {
        display: true,
        text: 'Break-up of Total Payment',
        fontSize: 18,
        fontColor: '#ffffff'
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          fontColor: '#ffffff'
        } 
      }
    }} />
  )
}

export default PieChart;
