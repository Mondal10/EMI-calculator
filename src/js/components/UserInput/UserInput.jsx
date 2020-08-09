import React from 'react';

import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 20px;
  padding: 2% 0;
  color: #e8e9e9;
`;

const Lable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  color: #082f52;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  height: 35px;
  border: 2px solid #A3BDE6;
`;

const InfoSpan = styled.span`
  padding: 7px;
`;

function UserInput({ name, symbol, label, value, handleInput }) {

  return (
    <InputContainer>
      <Lable>{label}</Lable>
      <div>
        <label>
          <InfoSpan>{symbol}</InfoSpan>
          <Input name={name} value={value} onChange={handleInput} />
        </label>
      </div>
    </InputContainer>
  )
}

export default UserInput;
