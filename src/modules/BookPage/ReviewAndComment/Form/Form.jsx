import { FormReview, Label, Input, Button, Text } from './Form.styled';
import icon from '../../../../images/sprite.svg';
export const Form = () => {
  return (
    <FormReview>
      <Label>
        <Input type="text" name="review" placeholder="Написати відгук" />
        <Button>
          <svg width="24px" height="24px">
            <use xlinkHref={icon + '#icon-message'}></use>
          </svg>
        </Button>
      </Label>
      <Text>*Максимальний вміст відгука 260 символів</Text>
    </FormReview>
  );
};
