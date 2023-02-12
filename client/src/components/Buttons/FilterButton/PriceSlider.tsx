import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0$',
  },
  {
    value: 300000,
    label: '300000$',
  },
];

function valuetext(value: number) {
  return `${value}$`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 300000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
        min={0}
        max={300000}
      />
    </Box>
  );
}
