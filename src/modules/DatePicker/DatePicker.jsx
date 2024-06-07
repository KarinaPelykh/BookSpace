import { useState } from 'react';
import PropTypes from 'prop-types';
import { DateList, DatePickerDiv } from './DatePicker.styled';

const DatePicker = ({ contents, dateSubmit }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleSelect = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'day':
        setDay(value);
        break;
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;

      default:
        break;
    }

    dateSubmit(name, value, contents);
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

  // const monthNames = [
  //   'Січень',
  //   'Лютий',
  //   'Березень',
  //   'Квітень',
  //   'Травень',
  //   'Червень',
  //   'Липень',
  //   'Серпень',
  //   'Вересень',
  //   'Жовтень',
  //   'Листопад',
  //   'Грудень',
  // ];

  return (
    <DatePickerDiv>
      <p>{contents}</p>
      <DateList>
        <li>
          {' '}
          <select name="day" value={day} onChange={handleSelect}>
            <option value="" disabled>
              День
            </option>
            {generateOptions(1, 31)}
          </select>
        </li>
        <li>
          {' '}
          <select name="month" value={month} onChange={handleSelect}>
            <option value="" disabled>
              Місяць
            </option>
            {generateOptions(1, 12)}
            {/* {monthNames.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))} */}
          </select>
        </li>
        <li>
          {' '}
          <select name="year" value={year} onChange={handleSelect}>
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
  dateSubmit: PropTypes.func,
};
