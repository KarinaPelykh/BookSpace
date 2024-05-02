import topBooks from '../../../data/topBook';
import icon from '../../../images/sprite.svg';
import { Author, Images, Rating, Title, Item } from './ItemBook.styled';
export const ItemBook = () => {
  return (
    <ul>
      {topBooks.slice(0, 1).map(({ id, images, title, author, rating }) => (
        <Item key={id}>
          <Images src={images} alt="book" />
          <Title>{title}</Title>
          <Author>{author}</Author>
          <Rating>
            <svg width="24px" height="24px">
              <use xlinkHref={icon + '#icon-Star'}></use>
            </svg>
            {rating}
          </Rating>
        </Item>
      ))}
    </ul>
  );
};
