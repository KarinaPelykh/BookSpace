import { Button, Images, Text, UserName, WrapperUser } from './User.styled';
import PropTypes from 'prop-types';
export const User = ({ user, images, reviews, critique }) => {
  return (
    <WrapperUser>
      <Images src={images} alt="user" />
      <UserName>{user}</UserName>
      <Text>{reviews} відгуків</Text>
      <Text>{critique} рецензії</Text>
      <Button>Підписатися</Button>
    </WrapperUser>
  );
};
User.propTypes = {
  user: PropTypes.string,
  images: PropTypes.string,
  reviews: PropTypes.number,
  critique: PropTypes.number,
};
