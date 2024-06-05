import { Container } from '../../components/Container/Container';
import data from '../../data/aboutAuthor.json';
import AboutAuthor from '../../modules/AboutAuthor/AboutAuthor';
import BooksByAuthor from '../../modules/AboutAuthor/BooksByAuthor';
import FiendReccomends from '../../modules/FriendReccomends/FiendRecommends';
const AboutAuthorPage = () => {
  return (
    <Container>
      <AboutAuthor author={data[0]} />
      <BooksByAuthor author={data[0]} />
      <FiendReccomends />
    </Container>
  );
};

export default AboutAuthorPage;
