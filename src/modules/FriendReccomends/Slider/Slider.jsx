import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import SwiperCore, { Navigation, Pagination, Mousewheel } from "../build/core";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import defultBookCover from '../../../images/book.jpg';
import { BookItem } from '../../BookInTheTop/BookItem/BookItem';
import './customslider.css';
const RecommendedBooksSlider = ({ friend, variant }) => {
  // const amount = variant === 'slider' ? 2.5 : 5;
  return (
    <Swiper
      className="friend-recommends-slider"
      direction="horizontal"
      loop={true}
      //   mousewheel={true}
      css-mode="true"
      modules={[Mousewheel, Navigation, Pagination]}
      navigation={true}
      pagination={{
        type: 'bullets',
        dynamicBullets: true,
        // el: '.swiper-pagination',
      }}
      breakpoints={{
        0: {
          slidesPerView: 5,
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
            // variant={variant}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecommendedBooksSlider;
