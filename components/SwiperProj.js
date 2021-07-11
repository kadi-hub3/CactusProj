// import Swiper core and required modules
import SwiperCore, { Autoplay, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([Autoplay, Scrollbar, A11y]);

const SwiperProj = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay
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
        <div className="py-2 px-4">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <h6 className="text-gray-400">Lorem ipsum dolor sit amet</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-2.jpg" className="w-full h-full object-cover" />
        <div className="py-2 px-4">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <h6 className="text-gray-400">Lorem ipsum dolor sit amet</h6>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/hero-3.jpg" className="w-full h-full object-cover" />
        <div className="py-2 px-4">
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <h6 className="text-gray-400">Lorem ipsum dolor sit amet</h6>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperProj;
