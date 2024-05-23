import PropTypes from 'prop-types';
export const Select = ({ value, setValue }) => {
  const data = [
    { text: 'Відгуки', id: '1' },
    { text: 'Рецензії', id: '2' },
  ];
  return (
    <select value={value} onChange={e => setValue(e.target.value)}>
      {data.map(({ text, id }) => (
        <option key={id}>{text}</option>
      ))}
    </select>
  );
};
Select.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};
