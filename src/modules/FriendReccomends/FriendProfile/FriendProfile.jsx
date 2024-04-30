// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   FrienProfileInfoContainer,
//   FriendProfileContainer,
// } from './FriendProfile.styled';
import {
  FriendProfileContainer,
  FrienProfileInfoContainer,
} from './FriendProfile.styled';
import { userReviews } from '../../../data/userReviews';
function FriendProfile() {
  const friend = userReviews[0];

  return (
    <FriendProfileContainer>
      <img src={friend.avatar} alt={`${friend.user} name`} width={78} />
      <FrienProfileInfoContainer>
        <h3>{friend.user} читає</h3>
        <p>{friend.reviews} відгуків</p>
        <p>{friend.critique} рецензій</p>
      </FrienProfileInfoContainer>
      <button type="button" alt="відписатися від друга">
        Відписатися
      </button>
    </FriendProfileContainer>
  );
}

// FriendProfile.propTypes = {};

export default FriendProfile;
