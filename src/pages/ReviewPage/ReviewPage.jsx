// import ItemBook from 'modules/ReviewBook/ReviewItemBook';
import { ReviewItemBook } from '../../modules/ReviewBook/ReviewItemBook';
import { Container } from '../../components/Container/Container';
import book from '../../images/book.jpg';
import { ReviewForm } from '../../modules/ReviewForm/ReviewForm';
import { ReviewSection } from '../../modules/ReviewForm/ReviewForm.styled';
import { Preview } from '../../modules/Preview/Preview';

const ReviewBook = {
  id: 0,
  images: book,
  title: 'Лев, відьма і шафа',
  author: 'К.С. Льюїс',
  rating: '5.2',
  year: '2005',
};

const PreviewUser = {
  user: 'Андрій ',
  friend_id: 4,
  avatar: '../images/friend.png',
  reviews: 85,
  critique: 23,
  title:
    'Якщо вони і згадували своє життя в цьому світі, то так, як згадують сон',
  description:
    'Отже, у нас є четверо досить звичайних дітей, які збираються вирушити у надзвичайну пригоду. У дитинстві я завжди мріяла. Я завжди була дещо інтровертною і воліла уявляти далекі місця, аніж існувати в сьогоденні. Я продовжую це робити і в дорослому віці. І саме тому я так люблю фентезі, бо воно настільки занурює в себе, що буквально забирає мене з головою. Люсі, Сьюзен, Едвард і Пітер - щасливчики. Коли вони натрапляють на шафу, що є воротами до більш цікавого світу, вони переживають щось вражаюче.',
  quote: [
    'Ніколи не знайдеться достатньо великої чашки чаю чи достатньо довгої книги, які б мені підходили.',
    'Бла блалала бла балала балалал абалла.',
  ],
  dateBegine: { day: '1', month: 'Січень', year: '1992' },
  dateEnd: { day: '2', month: 'Січень', year: '1993' },
};

const ReviewPage = () => {
  return (
    <Container>
      <ReviewSection>
        <ReviewItemBook book={ReviewBook} />
        {PreviewUser === false ? (
          <ReviewForm />
        ) : (
          <Preview previewUser={PreviewUser} book={ReviewBook} />
        )}
      </ReviewSection>
    </Container>
  );
};

export default ReviewPage;
