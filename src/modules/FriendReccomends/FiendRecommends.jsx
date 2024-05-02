import { StyledContainer } from '../../components/Container/Container.styled';
import { MainTitle } from '../BookInTheTop/BookInTheTop.styled';
import FriendProfile from './FriendProfile/FriendProfile';
import icon from '../../images/sprite.svg';

import { userReviews } from '../../data/userReviews';
import { LastSectionButton } from './FriendRecommends.styled';

function FiendReccomends() {
  return (
    <StyledContainer style={{ marginTop: '300px', border: 'none' }}>
      <MainTitle>Твої друзі рекомендують ці книги</MainTitle>

      {userReviews?.map(friend => {
        return <FriendProfile friend={friend} key={friend.friend_id} />;
      })}

      <LastSectionButton>
        Показати ще
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-down'}></use>
        </svg>
      </LastSectionButton>
    </StyledContainer>
  );
}

export default FiendReccomends;
