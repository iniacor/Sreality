import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material';

import styled from 'styled-components';

const StyledSelect = styled(Select)`
  & .MuiSelect-select {
    padding: 16px;
  }
`;

export default function BedroomsSelect() {
  const [beds, setBeds] = React.useState('');
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setBeds(event.target.value as string);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Beds</InputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={beds}
          label="Beds"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={'Studio'}>Studio</MenuItem>
          <MenuItem value={1}>1 Bed</MenuItem>
          <MenuItem value={2}>2 Beds</MenuItem>
          <MenuItem value={3}>3 Beds</MenuItem>
          <MenuItem value={'4+'}>4+ Beds</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
}
