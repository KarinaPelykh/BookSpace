import icon from '../../images/sprite.svg';
import { Author, ItemContainer, Rating, Title } from './BookAsSlide.styled';

const BookAsSlide = ({ id, images, title, author, rating }) => {
  return (
    <ItemContainer key={id}>
      <img src={images} alt={title} />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Rating>
        <svg width="25px" height="25px">
          <use xlinkHref={icon + '#icon-Star'}></use>
        </svg>
        {rating}
      </Rating>
    </ItemContainer>
  );
};

export default BookAsSlide;
