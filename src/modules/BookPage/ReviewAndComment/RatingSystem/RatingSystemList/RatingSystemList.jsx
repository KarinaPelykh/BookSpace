import { RatingSystemItem } from '../RatingSystemItem/RatingSystemItem';

export const RatingSystemList = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <ul>
      {data.reverse().map((item, index) => (
        <RatingSystemItem key={index} item={item} />
      ))}
    </ul>
  );
};
