import { Button, Images, Text, UserName, WrapperUser } from './User.styled';
import PropTypes from 'prop-types';
import defultImage from '../../../images/friend.png';
export const User = ({ user, images, reviews, critique, variant }) => {
  return (
    <WrapperUser>
      <Images src={defultImage || images} alt="user" />
      <UserName>{user}Читає</UserName>
      <Text>{reviews} відгуків</Text>
      <Text>{critique} рецензії</Text>
      <Button $variant={variant}>
        {variant === 'bookPage' ? 'Відписатися' : 'Підписатися'}
      </Button>
    </WrapperUser>
  );
};
User.propTypes = {
  user: PropTypes.string,
  images: PropTypes.string,
  reviews: PropTypes.number,
  critique: PropTypes.number,
  variant: PropTypes.string,
};
