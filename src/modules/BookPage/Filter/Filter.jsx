import PropTypes from 'prop-types';
import { Div, Item, List } from './Filter.styled';
export const Filter = () => {
  const data = [
    { text: 'Сортувати:', id: '1' },
    { text: 'Старі зверху ', id: '2' },
    { text: 'Нові зверху ', id: '3' },
    { text: 'Найкращі зверху  ', id: '4' },
    { text: 'Найгірші зверху  ', id: '5' },
  ];
  return (
    <Div>
      <List>
        {data.map(({ text, id }) => (
          <Item key={id}>{text}</Item>
        ))}
      </List>
    </Div>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};
