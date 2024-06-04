import { Container } from '../../components/Container/Container';
import { BookInTheTop } from '../../modules/BookInTheTop/BookInTheTop';
import FiendReccomends from '../../modules/FriendReccomends/FiendRecommends';
import { Reviews } from '../../modules/Reviews/Reviews';

const HomePage = () => {
  return (
    <Container>
      <BookInTheTop />
      <Reviews />
      <FiendReccomends />
    </Container>
  );
};
export default HomePage;
