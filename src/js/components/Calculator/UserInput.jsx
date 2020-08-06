import React from 'react';

import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 2% 0;
  color: #082f52;
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

function UserInput({ name, label, value, handleInput }) {

  const handleOnkeyDown = (event) => {
    const { keyCode } = event;

    // All keys except numbers, arrow navigation, delete, backspace and tab are blocked
    if (!((keyCode >= 48 && keyCode <= 57) || (keyCode >= 37 && keyCode <= 40) || keyCode == 8 || keyCode == 46 || keyCode == 9 || keyCode == 190 || keyCode == 110)) {
      event.preventDefault();
    }
  };

  return (
    <InputContainer>
      <Lable>{label}</Lable>
      <div>
        <Input name={name} value={value} onChange={handleInput} onKeyDown={handleOnkeyDown} />
      </div>
    </InputContainer>
  )
}

export default UserInput;
