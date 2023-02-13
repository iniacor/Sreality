import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const PhoneButton = styled((props: ButtonProps) => <Button variant="outlined" {...props} />)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.default};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

export default PhoneButton;
