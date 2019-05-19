import React from 'react';
import styled from 'styled-components';
import { Button as RebassButton } from 'rebass';

const ButtonStyled = styled(RebassButton)`
  cursor: pointer;
  transition-duration: 0.2s;
  :focus {
    outline: 0;
  }

  :hover {
    transform: translateY(-.20rem);
  }

  :active {
    transition-duration: 0.01s;
    transform: translateY(0);
  }
`;

export const Button = (props: any) => (
  <ButtonStyled {...props} bg="black">
    {props.children}
  </ButtonStyled>
);
