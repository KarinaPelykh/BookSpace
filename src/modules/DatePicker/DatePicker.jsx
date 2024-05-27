import { useState } from 'react';
import PropTypes from 'prop-types';
import { DateList, DatePickerDiv } from './DatePicker.styled';
const DatePicker = ({ contents }) => {
  const [selectedDate, setSelectedDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleSelect = e => {
    const { name, value } = e.target;
    setSelectedDate(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const monthNames = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  return (
    <DatePickerDiv>
      <h3>{contents}</h3>
      <DateList>
        <li>
          {' '}
          <select name="day" value={selectedDate.day} onChange={handleSelect}>
            <option value="" disabled>
              День
            </option>
            {generateOptions(1, 31)}
          </select>
        </li>
        <li>
          {' '}
          <select
            name="month"
            value={selectedDate.month}
            onChange={handleSelect}
          >
            <option value="" disabled>
              Місяць
            </option>
            {monthNames.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </li>
        <li>
          {' '}
          <select name="year" value={selectedDate.year} onChange={handleSelect}>
            <option value="" disabled>
              Рік
            </option>
            {generateOptions(1992, 2045)}
          </select>
        </li>
      </DateList>
    </DatePickerDiv>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  contents: PropTypes.string,
};
