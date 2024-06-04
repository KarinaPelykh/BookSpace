import { useState } from 'react';
import icon from '../../images/sprite.svg';
import { ShowMoreButtonContainer } from './ShowMoreButton.styled';
const ShowMoreButton = ({ toggle, textOpen, textClose, style }) => {
  const [showMore, setShowMore] = useState(false);
  const onCLick = () => {
    setShowMore(!showMore);
    toggle();
  };

  const iconToShow = showMore ? (
    <svg width="24px" height="24px">
      <use xlinkHref={icon + '#icon-up'}></use>
    </svg>
  ) : (
    <svg width="24px" height="24px">
      <use xlinkHref={icon + '#icon-down'}></use>
    </svg>
  );

  return (
    <ShowMoreButtonContainer onClick={onCLick} style={style}>
      {showMore ? textOpen : textClose}
      {iconToShow}
    </ShowMoreButtonContainer>
  );
};

export default ShowMoreButton;
