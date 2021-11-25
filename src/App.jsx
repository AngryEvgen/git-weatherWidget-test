import React, { Component } from 'react';
import Temperature from './components/Temperature/index.jsx';
import Forecast from '/src/components/HOC/Forecast/index.jsx';
import { getMonthName, checkTodayDate, dateToString } from './utils.js';
import './styles/style.scss';

let URL = 'https://myjson.dit.upm.es/api/bins/3xo1';

class App extends Component {
  state = {
    targetCity: '',
    weather: [],
    date: new Date('2021-11-11'),
    index: 0,
  };

  componentDidMount() {
    this.getData(URL);
  }

  getMonthName = getMonthName;
  checkTodayDate = checkTodayDate;
  dateToString = dateToString;

  // Получаем данные
  getData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let targetCity = data.target_city;
        let filteredWeather = data.weather.filter(
          (elem) => elem.city == targetCity
        );
        this.setState({ targetCity: targetCity });
        return filteredWeather;
      })
      .then((filteredWeather) => this.setState({ weather: filteredWeather }));
  };

  // Задаем состояние нажатых кнопок
  handleChangeIndex = (event) => {
    this.setState({ index: +event.target.dataset.index });
  };

  // Фильтр по датам. Выгружаем нужное количество дат, в зависимости от нажатой кнопки
  filterByDate = (arr, todayDate, index) => {
    let today = dateToString(todayDate);
    let [date, month, year] = today.split('-');
    let tomorrow = dateToString(new Date(year, month - 1, +date + 1));
    let fifthDay = dateToString(new Date(year, month - 1, +date + 4));
    let tenthDay = dateToString(new Date(year, month - 1, +date + 9));

    switch (index) {
      case 0:
        return arr.filter((elem) => elem.date === today);
        break;
      case 1:
        return arr.filter((elem) => elem.date === today);
        break;
      case 2:
        return arr.filter((elem) => elem.date === tomorrow);
        break;
      case 3:
        return arr.filter((elem) => {
          return elem.date >= today && elem.date <= fifthDay;
        });
        break;
      case 4:
        return arr.filter(
          (elem) => elem.date >= today && elem.date <= tenthDay
        );
    }
  };

  render() {
    let { date, weather, targetCity, index } = this.state;
    const MonthName = getMonthName(date);
    const Date = date.getDate();
    const Year = date.getFullYear();
    return (
      <>
        <div className='weather'>
          <div className='weather__today'>
            <p>
              Today, {MonthName} {Date}th, {Year}
            </p>
            <h1 className='weather__name'>{targetCity}</h1>
          </div>
          <Temperature
            weather={weather}
            checkTodayDate={checkTodayDate}
            todayDate={date}
          />
          <div className='wind'>
            <p className='wind__title'>Ветер</p>
            {weather.map(
              (item) =>
                checkTodayDate(item.date, date) && (
                  <p key={item.date} className='wind__value'>
                    {item.wind} м/с
                  </p>
                )
            )}
          </div>
          <Forecast
            index={index}
            weather={weather}
            todayDate={date}
            handleChangeIndex={this.handleChangeIndex}
            filterByDate={this.filterByDate}
          />
        </div>
      </>
    );
  }
}

export default App;
