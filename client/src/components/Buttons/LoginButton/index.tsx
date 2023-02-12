import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const AuthenticationButton = styled((props: ButtonProps) => (
  <Button variant="contained" {...props} />
))`
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export default AuthenticationButton;
