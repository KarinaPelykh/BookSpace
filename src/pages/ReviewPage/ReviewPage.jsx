// import ItemBook from 'modules/ReviewBook/ReviewItemBook';
import { ReviewItemBook } from '../../modules/ReviewBook/ReviewItemBook';
import { Container } from '../../Container/Container';
import book from '../../images/book.jpg';
import { ReviewForm } from '../../modules/ReviewForm/ReviewForm';
const ReviewBook = {
  id: 0,
  images: book,
  title: 'Лев, відьма і шафа',
  author: 'К.С. Льюїс',
  rating: '5.2',
  year: '2005',
};

const ReviewPage = () => {
  return (
    <Container>
      <ReviewItemBook book={ReviewBook} />
      <ReviewForm />
    </Container>
  );
};

export default ReviewPage;
