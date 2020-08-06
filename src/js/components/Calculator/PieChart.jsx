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
              '#FFFFFF',
              '#EB311C'
            ],
            hoverBackgroundColor: [
              '#3E4C5F',
              '#A9231F'
            ],
            data: [principalLoanAmt, totalInterest]
          }
        ]
      }} options={{
        title: {
          display: true,
          text: 'Break-up of Total Payment',
          fontSize: 18
        },
        legend: {
          display: true,
          position: 'right'
        }
      }} />
  )
}

export default PieChart;
