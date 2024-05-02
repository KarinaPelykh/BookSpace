import { User } from './User/User';
import icon from '../../images/sprite.svg';
import { userReviews } from '../../data/userReviews';
import {
  ButtonOpen,
  Date,
  Description,
  Div,
  Item,
  Thumb,
  Title,
  TitleReview,
  Value,
  WrapperSvg,
} from './Reviews.styled';
import { useState } from 'react';
export const Reviews = () => {
  const [visible, setVisible] = useState(false);
  const handelVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <TitleReview>Топ відгуків тижня</TitleReview>
      <ul>
        {userReviews.map(
          ({
            user,
            friend_id,
            avatar,
            reviews,
            critique,
            title,
            description,
            book: { id, images, s, author, rating },
          }) => (
            <Item key={friend_id}>
              <User
                user={user}
                images={avatar}
                reviews={reviews}
                critique={critique}
              />
              <Div>
                <svg width="148px" height="24px">
                  <use xlinkHref={icon + '#icon-Stars'}></use>
                </svg>
                <Date>3 квітня,2024</Date>
              </Div>
              <Title>&quot;{title}&quot;</Title>
              <Description className={visible ? 'active' : null}>
                {description}
              </Description>
              <ButtonOpen onClick={handelVisible}>
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
            </Item>
          )
        )}
      </ul>
      <ButtonOpen>
        Читати більше
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-down'}></use>
        </svg>
      </ButtonOpen>
    </>
  );
};
