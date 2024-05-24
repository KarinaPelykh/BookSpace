import { Form } from '../Form/Form';
import icon from '../../../../images/sprite.svg';
import { RatingList } from '../Rating/RatingsList';
import { RatingItem } from '../Rating/RatingItem/RatingItem';
import {
  Button,
  Section,
  Title,
  Wrapper,
  Text,
  DivMain,
  Thumb,
} from './ReviewAndComment.styled';
import { RatingSystemList } from '../RatingSystem/RatingSystemList/RatingSystemList';
import { useState } from 'react';
export const ReviewAndComment = () => {
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(!open);
  };
  return (
    <Section>
      <Title>Рецензії та відгуки</Title>
      <DivMain>
        <Wrapper>
          <div>
            <Thumb>
              <div>
                <RatingItem>
                  <button onClick={handelOpen}>
                    <svg width="24px" height="24px">
                      <use xlinkHref={icon + '#icon-down'}></use>
                    </svg>
                  </button>
                </RatingItem>
                {open && <RatingList />} <Text>Поставити рейтинг</Text>
              </div>
              <Button>Написати рецензію</Button>
            </Thumb>
            <Form />
          </div>
        </Wrapper>

        <RatingSystemList />
      </DivMain>
    </Section>
  );
};
