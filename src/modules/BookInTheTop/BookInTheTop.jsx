import icon from '../../images/sprite.svg';
import { Button, MainTitle } from './BookInTheTop.styled.js';
import { ListBooks } from './ListBook/ListBooks.jsx';
export const BooInTheTop = () => {
  return (
    <>
      <MainTitle>Топ тижня</MainTitle>
      <ListBooks />
      <Button>
        Показати ще
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-down'}></use>
        </svg>
      </Button>
    </>
  );
};
