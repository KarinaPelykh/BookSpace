import {
  Images,
  Title,
  Author,
  Rating,
  BookDiv,
} from './PreviewBookItem.styled';
import PropTypes from 'prop-types';
import icon from '../../images/sprite.svg';

export const PreviewBookItem = ({ images, title, author, rating }) => {
  return (
    <BookDiv>
      <Images src={images} alt="book" />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Rating>
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-Star'}></use>
        </svg>
        {rating}
      </Rating>
    </BookDiv>
  );
};

PreviewBookItem.propTypes = {
  images: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.string,
};
