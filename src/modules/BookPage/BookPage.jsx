import { Reviews } from '../../modules/Reviews/Reviews';
import { ListBooks } from '../../modules/BookInTheTop/ListBook/ListBooks';
import { Container } from '../../Container/Container';
import { Author } from './Author/Author';
import { Book } from './Book/Book';
import { useEffect, useState } from 'react';
import { ReviewAndComment } from './ReviewAndComment/ReviewAndComent/ReviewAndComment';
import { ReviewSlider } from './SliderCommentAndRewiev/Slider/Slider';
import { Select } from './Select/Select';
import icon from '../../images/sprite.svg';
import { Div, Svg, WrapperSelect, Title } from './BookPage.styled';
import RecommendedBooksSlider from '../../modules/FriendReccomends/Slider/Slider';
import { userReviews } from '../../data/userReviews';
import { Filter } from './Filter/Filter';
export const BookPage = () => {
  const [limit, setLimit] = useState(2);
  const [value, setValue] = useState('Відгуки');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(!open);
  };
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const books = userReviews.flatMap(review => review.book);
  return (
    <Container>
      <Div>
        <Book />
        <Author />
        <Reviews
          prop="Відгуки друзів"
          isShow={false}
          textButton="Показати більше відгуків"
          limit={limit}
          setLimit={setLimit}
          variant="bookPage"
        />
        <ReviewAndComment />
        <WrapperSelect>
          <Select value={value} setValue={setValue} />
          <button onClick={handelOpen}>
            <Svg>
              <use xlinkHref={icon + '#icon-filter'}></use>
            </Svg>
          </button>
          {open && <Filter open={open} />}
        </WrapperSelect>

        <ReviewSlider value={value} />
        <div>
          <Title>Рекомендації</Title>
          {windowWidth <= 1439 ? (
            <RecommendedBooksSlider friend={books} variant="slider" />
          ) : (
            <ListBooks />
          )}
        </div>
      </Div>
    </Container>
  );
};
