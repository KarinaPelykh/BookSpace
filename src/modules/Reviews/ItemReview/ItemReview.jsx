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
  Wrapper,
  Svg,
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
  isShow = true,
  variant,
}) => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleDescription = index => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <>
      <Wrap $variant={variant}>
        <User
          variant={variant}
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
            <Description
              className={visibleIndex === index ? 'active' : null}
              $variant={variant}
            >
              {description}
            </Description>
          </div>

          <Wrapper $variant={variant}>
            <ButtonOpen
              $variant={variant}
              onClick={() => toggleDescription(index)}
            >
              Читати повністю
              <Svg width="24px" height="24px">
                <use xlinkHref={icon + '#icon-down'}></use>
              </Svg>
            </ButtonOpen>

            <WrapperSvg>
              <Thumb>
                <Svg>
                  <use xlinkHref={icon + '#icon-like'}></use>
                </Svg>
                <Value>16</Value>
              </Thumb>
              <Svg $variant={variant}>
                <use xlinkHref={icon + '#icon-dislike'}></use>
              </Svg>
            </WrapperSvg>
          </Wrapper>
        </div>
      </Wrap>
      {isShow && <ItemBook />}
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
  isShow: PropTypes.bool,
  variant: PropTypes.string,
};
