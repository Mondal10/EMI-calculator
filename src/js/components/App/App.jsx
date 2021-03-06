import React from 'react';

import styled from 'styled-components';
import Calculator from '../Calculator/Calculator';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const App = () => (
  <Container>
    <Calculator />
  </Container>
);
