import icon from '../../../images/sprite.svg';
import PropTypes from 'prop-types';
import { Author, Images, Item, Rating, Title } from './BookItem.styled';
export const BookItem = ({ id, images, title, author, rating }) => {
  return (
    <Item key={id}>
      <Images src={images} alt="photo book" />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Rating>
        <svg width="25px" height="25px">
          <use xlinkHref={icon + '#icon-Star'}></use>
        </svg>
        {rating}
      </Rating>
    </Item>
  );
};
BookItem.propTypes = {
  id: PropTypes.number,
  images: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.string,
};
