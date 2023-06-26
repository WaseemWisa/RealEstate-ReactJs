import { useState } from 'react';

import { RangeSlider } from '@mantine/core';

import Box from './components/Box';
import './Advance.scss'

function Advance() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);

  const handleSliderChange = (newValues) => {
    setMinValue(newValues[0]);
    setMaxValue(newValues[1]);
  };

  return (
    <div className="right-col">
      <div className="box">
        <h4>Property Type</h4>
        <Box title={'House'} count={300}/>
        <Box title={'Office Villa'} count={700}/>
        <Box title={'Luxary Home'} count={2100}/>
        <Box title={'Studio'} count={800}/>
      </div>
      <div className="box">
        <h4>Amenities</h4>
        <Box title={'Dishwasher'} count={3000}/>
        <Box title={'Floor Coverings'} count={700}/>
        <Box title={'Internet'} count={2100}/>
        <Box title={'Supermarket'} count={800}/>
      </div>
      <div className="box">
        <h4>Price Renge</h4>
        <Box title={'Low Budget'} count={'$5,000 - $10,000'}/>
        <Box title={'Miduem Budget'} count={'$10,000 - $30,000'}/>
        <Box title={'High Budget'} count={'$30,000 Up'}/>
      </div>
      <div className="box">
        <h4>Filter By Price</h4>
        <div className="row">
          <span>Submit</span>
          <span>{minValue} - {maxValue}</span>
        </div>
        <RangeSlider 
        color='orange'
          thumbSize={14} 
          onChange={handleSliderChange}
          min={0}
          max={500}
          step={1}
        />
      </div>
    </div>
  )
}

export default Advance