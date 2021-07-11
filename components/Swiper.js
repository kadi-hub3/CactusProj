// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperProj = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={true}
      navigation
      // breakpoints={{
      //   350: {
      //     width: 350,
      //   },
      //   640: {
      //     width: 640,
      //   },
      //   768: {
      //     width: 768,
      //   },
      //   1024: {
      //     width: 1024,
      //   },
      // }}
    >
      <SwiperSlide>
        <img src="/hero-cover.jpg" className="w-full h-full object-cover" />
        <h5>Architecture 3D Design</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-2.jpg" className="w-full h-full object-cover" />
        <h5>Architecture 3D Design</h5>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-3.jpg" className="w-full h-full object-cover" />
        <h5>Architecture 3D Design</h5>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperProj;
