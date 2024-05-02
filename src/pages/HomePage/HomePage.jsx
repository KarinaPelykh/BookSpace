import { Container } from '../../components/Container/Container';
import { BooInTheTop } from '../../modules/BookInTheTop/BookInTheTop';
import FiendReccomends from '../../modules/FriendReccomends/FiendRecommends';
import { Reviews } from '../../modules/Reviews/Reviews';
export const HomePage = () => {
  return (
    <Container>
      <BooInTheTop />
      <Reviews />
      <FiendReccomends />
    </Container>
  );
};
