import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import UserInput from '../UserInput/UserInput';
import Result from '../Result/Result';
import PaymentDistribution from '../PaymentDistribution/PaymentDistribution';

const Header = styled.h2`
  color: #e8e9e9;
`;

const CalcContainer = styled.div`
  background-color: #232627;
  font-family: sans-serif;
  width: auto;
  padding: 2%;
  box-shadow: 0 3px 10px rgba(0,0,0,.6);
  border-radius: 20px;
`;

function Calculator() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [resultObj, setResultObj] = useState({
    loanEMI: 0,
    totalInterestToPay: 0,
    totalPayment: 0
  });
  const [monthlyDistribution, setMonthlyDistribution] = useState([]);
  const [yearlyDistribution, setYearlyDistribution] = useState([]);

  // True only when the input is either number or a number upto 2 decimal places
  const isValidNumber = (number) => {
    const validNumberRE = new RegExp(/^\d*\.?\d{0,2}$/);

    return (validNumberRE.test(number));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;

    if (!isValidNumber(value)) return;

    switch (name) {
      case 'LA':
        setAmount(value);
        break;
      case 'IR':
        setInterest(value);
        break;
      case 'LT':
        setTenure(value);
        break;
      default:
        break;
    }
  };

  const calculateEMI = (amount, interest, tenure) => {
    const RPA = (interest / (12 * 100)); // Interest Rate per anum
    const EMI = ((amount * RPA * ((1 + RPA) ** tenure)) / (((1 + RPA) ** (tenure)) - 1));

    const loanEMI = Math.round(EMI);
    const totalPayment = Math.round(EMI * tenure);
    const totalInterestToPay = Math.round(totalPayment - amount);

    const monthlyInterests = [];
    const monthlyPrinciples = [];
    const monthlyBalances = [];
    const monthlyDistribution = [];
    const yearlyDistribution = [];

    let balance = amount;
    let currentMonth = 1;
    let currentYear = 1;
    let totalYears = parseInt(tenure / 12);
    let totalMonths = tenure % 12;

    let yearlyInterest = 0;
    let yearlyPrinciple = 0;

    while (balance > 0) {
      const monthlyInterest = Math.round(RPA * balance);
      const monthlyPrinciple = Math.round(EMI - monthlyInterest);

      balance -= monthlyPrinciple;

      if (monthlyPrinciple > balance ) balance = 0;

      monthlyInterests.push(monthlyInterest);
      monthlyPrinciples.push(monthlyPrinciple);
      monthlyBalances.push(balance);

      monthlyDistribution.push({
        monthlyInterest,
        monthlyPrinciple,
        balance
      });

      // Yearly calculation
      yearlyInterest += monthlyInterest;
      yearlyPrinciple += monthlyPrinciple;

      if (currentMonth % 12 === 0) {
        yearlyDistribution.push({
          yearlyInterest,
          yearlyPrinciple,
          balance
        });

        // re-initiate the values
        yearlyInterest = 0;
        yearlyPrinciple = 0;

        currentYear++;
      }

      // For remaining months eg: 16months is 1 year and 6 months
      if (balance === 0 && currentYear > totalYears) {
        yearlyDistribution.push({
          yearlyInterest,
          yearlyPrinciple,
          balance
        });
      }

      currentMonth++;
    }

    setMonthlyDistribution([...monthlyDistribution]);
    setYearlyDistribution([...yearlyDistribution]);
    setResultObj({ ...resultObj, loanEMI, totalInterestToPay, totalPayment });
  };

  useEffect(() => {
    calculateEMI(amount, interest, tenure);
  }, [amount, interest, tenure]);

  return (
    <CalcContainer>
      <Header> EMI Calculator </Header>
      <div className='user-inpt-container'>
        <UserInput name='LA' symbol="₹" value={amount} label='Loan Amount' handleInput={handleInput} />
        <UserInput name='IR' symbol="%" value={interest} label='Interest Rate' handleInput={handleInput} />
        <UserInput name='LT' symbol="Mo" value={tenure} label='Loan Tenure' handleInput={handleInput} />
      </div>
      <Result resultObj={resultObj} amount={amount} />
      <PaymentDistribution monthlyDistribution={monthlyDistribution} yearlyDistribution={yearlyDistribution} />
    </CalcContainer>
  )
}

export default Calculator;
