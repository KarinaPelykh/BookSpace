import {
  Date,
  Div,
  ButtonOpen,
  WrapperSvg,
  Thumb,
  Value,
  Wrapper,
  Svg,
} from '../Reviews/ItemReview/ItemReview.styled';
import icon from '../../images/sprite.svg';
import {
  DateUl,
  DescriptionDiv,
  DescriptionText,
  QuoteUl,
} from './DescriptionPreview.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const DescriptionPreview = ({
  description,
  quote,
  dateBegine,
  dateEnd,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handelSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(description);
  return (
    <DescriptionDiv>
      <Div>
        <svg width="148px" height="24px">
          <use xlinkHref={icon + '#icon-Stars'}></use>
        </svg>
        <Date>3 квітня,2024</Date>
      </Div>
      <div>
        <DescriptionText className={isOpen ? 'active' : null}>
          {description}
        </DescriptionText>
        <QuoteUl>
          {quote.map((el, index) => {
            return (
              <li key={index}>
                <p>{el}</p>
              </li>
            );
          })}
        </QuoteUl>
        <DateUl>
          <li>
            <p>
              <span>Дата початку читання:</span> {dateBegine.day}.
              {dateBegine.month}.{dateBegine.year}
            </p>
          </li>
          <li>
            <p>
              <span>Дата закінчення читання:</span> {dateEnd.day}.
              {dateEnd.month}.{dateEnd.year}
            </p>
          </li>
        </DateUl>
      </div>

      <Wrapper>
        <ButtonOpen onClick={handelSetIsOpen}>
          {isOpen ? 'Згорнути рецензію' : 'Показати повністю'}
          {isOpen ? (
            <Svg width="24px" height="24px">
              <use xlinkHref={icon + '#icon-up'}></use>
            </Svg>
          ) : (
            <Svg width="24px" height="24px">
              <use xlinkHref={icon + '#icon-down'}></use>
            </Svg>
          )}
        </ButtonOpen>

        <WrapperSvg>
          <Thumb>
            <Svg>
              <use xlinkHref={icon + '#icon-like'}></use>
            </Svg>
            <Value>16</Value>
          </Thumb>
          <Svg>
            <use xlinkHref={icon + '#icon-dislike'}></use>
          </Svg>
        </WrapperSvg>
      </Wrapper>
    </DescriptionDiv>
  );
};

DescriptionPreview.propTypes = {
  description: PropTypes.string,
  index: PropTypes.string,
  variant: PropTypes.string,
  quote: PropTypes.arrayOf(PropTypes.string),
  dateBegine: PropTypes.object,
  dateEnd: PropTypes.object,
};
