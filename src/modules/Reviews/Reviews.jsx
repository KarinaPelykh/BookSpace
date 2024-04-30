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
export const Reviews = () => {
  return (
    <>
      <TitleReview>Топ відгуків тижня</TitleReview>
      <ul>
        {userReviews.map(
          ({
            user,
            images,
            reviews,
            critique,
            title,
            description,
            book: { id, imagesBook, titleBook, author, rating },
          }) => (
            <Item key={id}>
              <User
                user={user}
                images={images}
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
              <Description>{description}</Description>
              <ButtonOpen>
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
