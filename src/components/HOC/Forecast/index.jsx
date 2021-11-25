import React from 'react';
import Button from '/src/components/UI/Button/index.jsx';
import Days from '/src/components/HOC/Days/index.jsx';
import './style.scss';
import '/src/components/UI/Button/style.scss';

const Forecast = ({
  handleChangeIndex,
  index,
  weather,
  filterByDate,
  todayDate,
}) => {
  const setTitle = (index) => {
    switch (index) {
      case 0:
        return 'Today';
        break;
      case 1:
        return 'Today';
        break;
      case 2:
        return 'Tomorrow';
        break;
      case 3:
        return 'The next 5 days';
        break;
      case 4:
        return 'The next 10 days';
        break;
    }
  };

  const names = ['Сегодня', 'Завтра', '5 дней', '10 дней'];

  return (
    <div className='forecast'>
      <div className='forecast__buttons'>
        {names.map((name, i) => (
          <Button
            key={name}
            handleChangeIndex={handleChangeIndex}
            dataIndex={i + 1}
          >
            {name}
          </Button>
        ))}
      </div>
      <h2 className='forecast__title'>{setTitle(index)}</h2>
      <div className='forecast__dayli'>
        {filterByDate(weather, todayDate, index).map((item) => (
          <Days key={item.date} temp={item.temp} date={item.date} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
