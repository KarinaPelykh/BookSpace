import { RatingItem } from './RatingItem/RatingItem';

const data = [
  { text: 'Cюжет', id: '1' },
  { text: 'Стиль тексту', id: '2' },
  { text: 'Персонажі', id: '3' },
  { text: 'Деталізація світу', id: '4' },
];

export const RatingList = () => {
  return (
    <ul>
      {data.map(({ text, id }) => (
        <RatingItem key={id} text={text}  variant="position"/>
      ))}
    </ul>
  );
};
