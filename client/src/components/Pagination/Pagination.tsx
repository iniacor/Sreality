import { Pagination, PaginationProps } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const PaginationComponent = styled((props: PaginationProps) => (
  <Pagination variant="text" {...props} />
))`
  & .MuiPaginationItem-root.Mui-selected {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.support.main};
    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;

export default PaginationComponent;
