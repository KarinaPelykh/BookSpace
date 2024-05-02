import { userReviews } from '../../../data/userReviews';

import { Item } from './ListReview.styled';
import { ItemReview } from '../ItemReview/ItemReview';

export const ListReview = () => {
  return (
    <ul>
      {userReviews.map(
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
            />
          </Item>
        )
      )}
    </ul>
  );
};
