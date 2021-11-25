import React from 'react';
import IconComponent from '/src/components/UI/IconComponent.jsx';
import './style.scss';

const Days = ({ temp, date }) => {
  const getDayName = (str) => {
    let correctStr = str.split('-').reverse().join('-');
    let date = new Date(correctStr);
    let day = date.toLocaleString('en-us', { weekday: 'long' });
    return day;
  };

  return (
    <div className='days'>
      <p className='days__day-name'>{getDayName(date)}</p>
      <div className='days__card'>
        <IconComponent temp={temp} />
        <p className='days__temp'>{temp}°C</p>
      </div>
    </div>
  );
};

export default Days;
