import { ItemBook } from '../ItemBook/ItemBook';
import icon from '../../../images/sprite.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Date,
  Wrap,
  Div,
  Title,
  Description,
  ButtonOpen,
  WrapperSvg,
  Thumb,
  Value,
} from './ItemReview.styled';
import { User } from '../User/User';
export const ItemReview = ({
  user,
  avatar,
  reviews,
  critique,
  title,
  description,
  index,
}) => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleDescription = index => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <>
      <Wrap>
        <User
          user={user}
          images={avatar}
          reviews={reviews}
          critique={critique}
        />
        <div>
          <Div>
            <svg width="148px" height="24px">
              <use xlinkHref={icon + '#icon-Stars'}></use>
            </svg>
            <Date>3 квітня,2024</Date>
          </Div>
          <div>
            <Title>&quot;{title}&quot;</Title>
            <Description className={visibleIndex === index ? 'active' : null}>
              {description}
            </Description>
          </div>

          <div style={{ marginTop: '20px' }}>
            <ButtonOpen onClick={() => toggleDescription(index)}>
              Читати повністю
              <svg width="24px" height="24px">
                <use xlinkHref={icon + '#icon-down'}></use>
              </svg>
            </ButtonOpen>
            <WrapperSvg>
              <Thumb>
                <svg width="24px" height="24px">
                  <use xlinkHref={icon + '#icon-like'}></use>
                </svg>
                <Value>16</Value>
              </Thumb>
              <svg width="24px" height="24px">
                <use xlinkHref={icon + '#icon-dislike'}></use>
              </svg>
            </WrapperSvg>
          </div>
        </div>
      </Wrap>
      <ItemBook />
    </>
  );
};
ItemReview.propTypes = {
  user: PropTypes.string,
  avatar: PropTypes.string,
  reviews: PropTypes.number,
  critique: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  index: PropTypes.number,
};