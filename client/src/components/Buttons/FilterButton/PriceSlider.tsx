import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

function valueLabelFormat(value: number) {
  return `${value}$`;
}

function calculateValue(value: number) {
  return value;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 300000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue as number[]);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="non-linear-slider" gutterBottom>
        Price range: {valueLabelFormat(calculateValue(value[0]))} -{' '}
        {valueLabelFormat(calculateValue(value[1]))}
      </Typography>
      <Slider
        value={value}
        min={0}
        step={100}
        max={300000}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
    </Box>
  );
}
