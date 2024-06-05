import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
// import SwiperCore, { Navigation, Pagination, Mousewheel } from "../build/core";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import defultBookCover from '../../images/book.jpg';
// import '../../modules/FriendReccomends/Slider/customslider.css';
import BookAsSlide from 'src/components/BookAsSlide/BookAsSlide';
import './aboutAuthorSlider.css';
const AboutAuhtorPageSlider = ({ friend }) => {
  console.log('aboutpageslider');
  return (
    <Swiper
      className="books-by-author"
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
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
    >
      {friend?.map(({ id, images, title, author, rating }) => (
        <SwiperSlide key={id}>
          <BookAsSlide
            key={id}
            images={defultBookCover || images}
            title={title}
            author={author}
            rating={rating}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default AboutAuhtorPageSlider;
//  <BookItem
//    key={id}
//    images={defultBookCover || images}
//    title={title}
//    author={author}
//    rating={rating}
//  />;
