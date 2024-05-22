import { userReviews } from '../../../data/userReviews';
import PropTypes from 'prop-types';
import { Item } from './ListReview.styled';
import { ItemReview } from '../ItemReview/ItemReview';

export const ListReview = ({ isShow, limit, variant }) => {
  const data = limit ? userReviews.slice(limit) : userReviews;
  return (
    <ul>
      {data?.map(
        (
          { user, friend_id, avatar, reviews, critique, title, description },
          index
        ) => (
          <Item key={friend_id}>
            <ItemReview
              index={index}
              user={user}
              friend_id={friend_id}
              avatar={avatar}
              reviews={reviews}
              critique={critique}
              title={title}
              description={description}
              isShow={isShow}
              variant={variant}
            />
          </Item>
        )
      )}
    </ul>
  );
};
ListReview.propTypes = {
  isShow: PropTypes.bool,
  limit: PropTypes.number,
  variant: PropTypes.string,
};
