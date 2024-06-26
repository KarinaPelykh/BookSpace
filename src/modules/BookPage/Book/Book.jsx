import icon from '../../../images/sprite.svg';
import topBooks from '../../../data/topBook';
import {
  Author,
  Div,
  Images,
  Title,
  Wrapper,
  Text,
  Summary,
  Span,
  Button,
  Select,
  ButtonShow,
  Section,
  EmptySpan,
  WrapperRating,
} from './Book.styled';
import { useState } from 'react';
export const Book = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelSetIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Section>
      <Images src={topBooks[0].images} alt="book" />
      <div>
        <Title>Лев, відьма і шафа</Title>
        <Author>Клайв Стейплз Льюїс</Author>
        <Wrapper>
          <div>
            <svg width="148px" height="24px">
              <use xlinkHref={icon + '#icon-Stars'}></use>
            </svg>
            <Span>4,5</Span>
          </div>
          <WrapperRating>
            <Text> 11 оцінок</Text>
            <Text>5 рецензій</Text>
            <Text>5 відгуків</Text>
          </WrapperRating>
        </Wrapper>

        <Summary className={isOpen ? 'active' : null}>
          Нарнія... країна за дверима шафи, таємне місце, застигле у вічній
          зимі, чарівна країна, що чекає на звільнення. <EmptySpan></EmptySpan>
          Люсі першою розгадує таємницю шафи у таємничому старому будинку
          професора. Спочатку брати і сестра не вірять їй, коли вона розповідає
          про свій візит до країни Нарнії. Але незабаром Едмунд, а потім Пітер і
          Сьюзен самі проходять крізь шафу. У Нарнії вони знаходять країну,
          поховану під злими чарами Білої Відьми. Зустрівши лева Аслана, вони
          розуміють, що покликані до великої пригоди, і відважно вступають у
          битву, щоб звільнити Нарнію від зловісних чар відьми
          <span>
            . Люсі першою розгадує таємницю шафи у таємничому старому будинку
            професора. Спочатку брати і сест ра не вірять їй, коли вона
            розповідає про свій візит до країни Нарнії. Але незабаром Едмунд, а
            потім Пітер і Сьюзен самі проходять крізь шафу. У Нарнії вони
            знаходять країну, поховану під злими чарами Білої Відьми. Зустрівши
            лева Аслана, вони розуміють, що покликані до великої пригоди, і
            відважно вступають у битву, щоб звільнити Нарнію від зловісних чар
            відьми.
          </span>
        </Summary>
        <Div>
          <Button>Додати до книжної полички</Button>
          <Select>
            <option>Хочу прочитати</option>
          </Select>
        </Div>
        <ButtonShow onClick={handelSetIsOpen}>
          {isOpen ? 'Згорнути опис книги' : 'Показати повністю'}
          <svg width="24px" height="24px">
            <use xlinkHref={icon + '#icon-down'}></use>
          </svg>
        </ButtonShow>
      </div>
    </Section>
  );
};
