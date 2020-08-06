import React from 'react';

import './App.css';

import styled from 'styled-components';
import Calculator from '../Calculator/Calculator';

const Container = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const App = () => (
  <Container>
    <Calculator />
  </Container>
);
