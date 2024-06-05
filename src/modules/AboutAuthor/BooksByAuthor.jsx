import { MainTitle } from '../../modules/BookInTheTop/BookInTheTop.styled';

// import { ListBooks } from '../../modules/BookInTheTop/ListBook/ListBooks';
import useWindowResize from 'src/service/hooks/UseWindowResize';
import ShowMoreButton from '../../components/ShowMoreButton/ShowMoreButton';
import { userReviews } from '../../data/userReviews';
import { ListBooks } from '../BookInTheTop/ListBook/ListBooks';
import AboutAuhtorPageSlider from './AboutAuhtorPageSlider';
const BooksByAuthor = ({ author, friend }) => {
  const { DesktopWidth } = useWindowResize();
  const books = userReviews.flatMap(review => review.book);
  console.log(books);
  return (
    <>
      <MainTitle style={{ margin: '0', marginBottom: '32px' }}>
        Книги від {author.name}
      </MainTitle>

      <>
        {!DesktopWidth ? (
          <AboutAuhtorPageSlider friend={books} />
        ) : (
          <>
            <ListBooks />
            <ShowMoreButton
              textOpen={'Сховати'}
              textClose={'Показати всі книги'}
              style={{ margin: 'auto' }}
            />
          </>
        )}
      </>
    </>
  );
};

export default BooksByAuthor;
