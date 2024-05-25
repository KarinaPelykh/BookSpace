import icon from '../../../../../images/sprite.svg';
import { Svg, Text, Wrapper } from './RatingItem.styled';
import PropTypes from 'prop-types';
export const RatingItem = ({ text, children, variant }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Svg $variant={variant}>
        <use xlinkHref={icon + '#Stars-review'}></use>
      </Svg>
      {children}
    </Wrapper>
  );
};
RatingItem.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
  variant: PropTypes.string,
};
