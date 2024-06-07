import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ListReview } from '../../../Reviews/ListReview/ListReview';
import './Slider.css';
export const ReviewSlider = ({ value }) => {
  const slides = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <>
      {value === 'Відгуки' ? (
        <ListReview limit={3} isShow={false} variant="bookPage" />
      ) : (
        <Swiper
          className="review-autor"
          direction="horizontal"
          loop={true}
          css-mode="true"
          modules={[Mousewheel, Navigation, Pagination]}
          navigation={true}
          pagination={{
            type: 'bullets',
            dynamicBullets: true,
          }}
        >
          {slides?.map(index => (
            <SwiperSlide key={index}>
              <ListReview limit={3} isShow={false} variant="slider" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
ReviewSlider.propTypes = {
  value: PropTypes.string,
};
