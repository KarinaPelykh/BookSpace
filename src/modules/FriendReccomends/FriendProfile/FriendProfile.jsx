// import React from 'react';
// import PropTypes from 'prop-types';
// import {
//   FrienProfileInfoContainer,
//   FriendProfileContainer,
// } from './FriendProfile.styled';
import RecommendedBooksSlider from '../Slider/Slider';
import {
  FriendProfileContainer,
  FriendProfileSectionContainer,
  FrienProfileInfoContainer,
} from './FriendProfile.styled';
import defultImage from '../../../images/friend.png';
function FriendProfile({ friend }) {
  return (
    <FriendProfileSectionContainer>
      <FriendProfileContainer>
        <img
          src={defultImage || friend.avatar}
          alt={`${friend.user} name`}
          width={78}
        />
        <FrienProfileInfoContainer>
          <h3>{friend.user} читає</h3>
          <p>{friend.reviews} відгуків</p>
          <p>{friend.critique} рецензій</p>
        </FrienProfileInfoContainer>
        <button type="button" alt="відписатися від друга">
          Відписатися
        </button>
      </FriendProfileContainer>
      <RecommendedBooksSlider friend={friend.book} />
    </FriendProfileSectionContainer>
  );
}

// FriendProfile.propTypes = {};

export default FriendProfile;
