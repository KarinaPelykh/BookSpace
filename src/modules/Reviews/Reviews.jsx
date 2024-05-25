import icon from '../../images/sprite.svg';
import { ListReview } from './ListReview/ListReview';
import { Button, TitleReview } from './Reviews.styled';
import PropTypes from 'prop-types';
export const Reviews = ({
  prop,
  isShow,
  textButton,
  limit,
  setLimit,
  variant,
}) => {
  return (
    <>
      <TitleReview $variant={variant}>
        {prop ? prop : 'Топ відгуків тижня'}
      </TitleReview>
      <ListReview
        isShow={isShow}
        limit={limit}
        setLimit={setLimit}
        variant={variant}
      />

      <Button>
        {textButton ? textButton : ' Читати більше'}
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-down'}></use>
        </svg>
      </Button>
    </>
  );
};
Reviews.propTypes = {
  prop: PropTypes.string,
  isShow: PropTypes.bool,
  textButton: PropTypes.string,
  limit: PropTypes.number,
  setLimit: PropTypes.func,
  variant: PropTypes.string,
};
