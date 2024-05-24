import styled from 'styled-components';
import { RatingSystemItem } from '../RatingSystemItem/RatingSystemItem';

export const RatingSystemList = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <List>
      {data.reverse().map((item, index) => (
        <RatingSystemItem key={index} item={item} />
      ))}
    </List>
  );
};

const List = styled.ul`
  margin-bottom: 24px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;
