import { RatingList } from '../BookPage/ReviewAndComment/Rating/RatingsList';
import { RatingItem } from '../BookPage/ReviewAndComment/Rating/RatingItem/RatingItem';
import icon from '../../images/sprite.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Image,
  ImageBox,
  ImageList,
  RetingBox,
  RetingButtonSvg,
  Section,
} from './ReviewItemBook.styled';

export function ReviewItemBook({ book }) {
  const [open, setOpen] = useState(false);
  const { images, title, author, year } = book;
  const handelOpen = () => {
    setOpen(!open);
  };
  return (
    <Section>
      <ImageBox>
        <Image src={images} alt="book"></Image>
        <ImageList>
          <li>
            Назва:<span>{title}</span>{' '}
          </li>
          <li>
            Автор:<span> {author}</span>
          </li>
          <li>
            Рік виходу:<span> {year}</span>
          </li>
        </ImageList>
      </ImageBox>

      <RetingBox>
        <div>
          <span>Моя оцінка:</span>
          <RatingItem>
            <button onClick={handelOpen}>
              <RetingButtonSvg width="34px" height="34px">
                <use xlinkHref={icon + '#icon-down'}></use>
              </RetingButtonSvg>
            </button>
          </RatingItem>
        </div>

        {open && <RatingList />}
      </RetingBox>
    </Section>
  );
}

ReviewItemBook.propTypes = {
  book: PropTypes.object,
};
