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
} from './ReviewAndComment.styled';
import { RatingSystemList } from '../RatingSystem/RatingSystemList/RatingSystemList';
export const ReviewAndComment = () => {
  return (
    <Section>
      <Title>Рецензії та відгуки</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <Wrapper>
          <div>
            <RatingItem>
              <button>
                <svg width="24px" height="24px">
                  <use xlinkHref={icon + '#icon-down'}></use>
                </svg>
              </button>
            </RatingItem>
            <RatingList /> <Text>Поставити рейтинг</Text>
          </div>
          <Button>Написати рецензію</Button>
        </Wrapper>

        <RatingSystemList />
      </div>
      <Form />
    </Section>
  );
};
