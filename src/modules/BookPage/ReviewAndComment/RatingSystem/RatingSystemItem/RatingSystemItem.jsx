import icon from '../../../../../images/sprite.svg';
import {
  Span,
  Wrapper,
  Svg,
  Div,
  SpanTwo,
  Thumb,
} from './RatingSystemItem.styled';
import PropTypes from 'prop-types';
export const RatingSystemItem = ({ item }) => {
  return (
    <Wrapper>
      <Span>{item}</Span>
      <Svg>
        <use xlinkHref={icon + '#star'}></use>
      </Svg>
      <Thumb>
        <Div></Div>
        <SpanTwo>{0}</SpanTwo>
      </Thumb>
    </Wrapper>
  );
};
RatingSystemItem.propTypes = {
  item: PropTypes.number,
};
