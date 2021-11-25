import React from 'react';
import './style.scss';

const Temperature = ({ weather, checkTodayDate, todayDate }) => {
  return (
    <div className='temperature'>
      {weather.map(
        (item) =>
          checkTodayDate(item.date, todayDate) && (
            <p key={item.date} className='temperature__value'>
              {item.temp}
              <span>°C</span>
            </p>
          )
      )}
    </div>
  );
};

export default Temperature;
