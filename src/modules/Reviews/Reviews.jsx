import icon from '../../images/sprite.svg';
import { ListReview } from './ListReview/ListReview';
import { Button, TitleReview } from './Reviews.styled';

export const Reviews = () => {
  return (
    <>
      <TitleReview>Топ відгуків тижня</TitleReview>
      <ListReview />
      <Button>
        Читати більше
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-down'}></use>
        </svg>
      </Button>
    </>
  );
};
