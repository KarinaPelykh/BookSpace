import { StyledContainer } from '../../components/Container/Container.styled';
import { Button, MainTitle } from '../BookInTheTop/BookInTheTop.styled';
import FriendProfile from './FriendProfile/FriendProfile';
import icon from '../../images/sprite.svg';
import { ListBooks } from '../BookInTheTop/ListBook/ListBooks';
function FiendReccomends() {
  return (
    <StyledContainer>
      <MainTitle>Топ тижня</MainTitle>
      <div>
        <FriendProfile />
        <ListBooks />
      </div>

      <Button style={{ marginBottom: '58px', marginTop: '32px' }}>
        Показати ще
        <svg width="24px" height="24px">
          <use xlinkHref={icon + '#icon-down'}></use>
        </svg>
      </Button>
    </StyledContainer>
  );
}

export default FiendReccomends;
