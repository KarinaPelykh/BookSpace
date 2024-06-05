// import ItemBook from 'modules/ReviewBook/ReviewItemBook';
import { ReviewItemBook } from '../../modules/ReviewBook/ReviewItemBook';
import { Container } from '../../components/Container/Container';
import book from '../../images/book.jpg';
import { ReviewForm } from '../../modules/ReviewForm/ReviewForm';
import { ReviewSection } from '../../modules/ReviewForm/ReviewForm.styled';
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
      <ReviewSection>
        <ReviewItemBook book={ReviewBook} />
        <ReviewForm />
      </ReviewSection>
    </Container>
  );
};

export default ReviewPage;
