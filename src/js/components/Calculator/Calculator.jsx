import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import UserInput from './UserInput';
import Result from './Result';

const Header = styled.h2`
  color: #082f52;
`;

const CalcContainer = styled.div`
  background-color: #FFFFFF;
  width: 50%;
  padding: 2%;
  box-shadow: 0 3px 10px rgba(0,0,0,.16);
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

  const handleInput = (event) => {
    const { name, value } = event.target;

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

    setResultObj({...resultObj, loanEMI, totalInterestToPay, totalPayment});
  };

  useEffect(() => {
    calculateEMI(amount, interest, tenure);
  }, [amount, interest, tenure]);

  return (
    <CalcContainer>
      <Header> EMI Calculator </Header>
      <div className='user-inpt-container'>
        <UserInput name='LA' value={amount} label='Loan Amount' handleInput={handleInput} />
        <UserInput name='IR' value={interest} label='Interest Rate' handleInput={handleInput} />
        <UserInput name='LT' value={tenure} label='Loan Tenure' handleInput={handleInput} />
      </div>
      <Result resultObj={resultObj} amount={amount}/>
    </CalcContainer>
  )
}

export default Calculator;
