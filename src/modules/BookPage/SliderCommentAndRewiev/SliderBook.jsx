import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import defultBookCover from '../../../images/book.jpg';

import '../../../modules/BookPage/SliderCommentAndRewiev/SliderBook.css';
import { BookItem } from 'src/modules/BookInTheTop/BookItem/BookItem';
const SliderBook = ({ friend, variant }) => {
  const amount = variant === 'slider' ? 2.5 : 5;

  return (
    <Swiper
      className="slider-book-bookpage"
      direction="horizontal"
      loop={true}
      css-mode="true"
      modules={[Mousewheel, Navigation, Pagination]}
      navigation={true}
      pagination={{
        type: 'bullets',
        dynamicBullets: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: amount,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
    >
      {friend?.map(({ id, images, title, author, rating }) => (
        <SwiperSlide key={id}>
          <BookItem
            key={id}
            images={defultBookCover || images}
            title={title}
            author={author}
            rating={rating}
            variant={variant}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderBook;
