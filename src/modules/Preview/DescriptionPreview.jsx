import {
  Date,
  Div,
  Description,
  ButtonOpen,
  WrapperSvg,
  Thumb,
  Value,
  Wrapper,
  Svg,
} from '../Reviews/ItemReview/ItemReview.styled';
import icon from '../../images/sprite.svg';
import { DateUl, DescriptionDiv, QuoteUl } from './DescriptionPreview.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const DescriptionPreview = ({
  description,
  index,
  variant,
  quote,
  dateBegine,
  dateEnd,
}) => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const toggleDescription = index => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <DescriptionDiv>
      <Div>
        <svg width="148px" height="24px">
          <use xlinkHref={icon + '#icon-Stars'}></use>
        </svg>
        <Date>3 квітня,2024</Date>
      </Div>
      <div>
        <Description
          className={visibleIndex === index ? 'active' : null}
          $variant={variant}
        >
          {description}
        </Description>
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
              Дата початку читання:{dateBegine.day}.{dateBegine.month}.
              {dateBegine.year}
            </p>
          </li>
          <li>
            <p>
              Дата закінчення читання:{dateEnd.day}.{dateEnd.month}.
              {dateEnd.year}
            </p>
          </li>
        </DateUl>
      </div>

      <Wrapper $variant={variant}>
        <ButtonOpen $variant={variant} onClick={() => toggleDescription(index)}>
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
