import SwiperCore, { Autoplay, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay, Scrollbar, A11y]);

const SwiperReviews = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true} autoplay navigation>
      <SwiperSlide>
        <div className="py-2 px-4">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <h6 className="text-gray-400">Lorem ipsum dolor sit amet</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-2 px-4">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <h6 className="text-gray-400">Lorem ipsum dolor sit amet</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="py-2 px-4">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <h6 className="text-gray-400">Lorem ipsum dolor sit amet</h6>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperReviews;
