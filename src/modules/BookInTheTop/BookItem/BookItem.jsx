import PropTypes from 'prop-types';
import icon from '../../../images/sprite.svg';
import { Author, Images, Item, Rating, Title } from './BookItem.styled';
export const BookItem = ({ id, images, title, author, rating, variant }) => {
  return (
    <Item key={id}>
      <Images src={images} alt="photo book" />
      <Title $variant={variant}>{title}</Title>
      <Author $variant={variant}>{author}</Author>
      <Rating $variant={variant}>
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
  variant: PropTypes.string,
};
