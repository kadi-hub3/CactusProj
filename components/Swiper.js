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
      <SwiperSlide className="relative">
        <img src="/hero-cover.jpg" className="w-full h-screen object-cover" />
        <div className="font-serif absolute bg-white opacity-90 bottom-0 left h-40 w-2/3 py-10 px-10 z-30 items-center">
          <h5 className="text-2xl tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <h6 className="text-gray-400 text-xl my-2">
            Lorem ipsum dolor sit amet
          </h6>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img src="/hero-2.jpg" className="w-full h-screen object-cover" />
        <div className="font-serif absolute bg-white opacity-90 bottom-0 left h-40 w-2/3 py-10 px-10 z-30 items-center">
          <h5 className="text-2xl tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <h6 className="text-gray-400 text-xl my-2">
            Lorem ipsum dolor sit amet
          </h6>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <img src="/hero-3.jpg" className="w-full h-screen object-cover" />
        <div className="font-serif absolute bg-white opacity-90 bottom-0 left h-40 w-2/3 py-10 px-10 z-30 items-center">
          <h5 className="text-2xl tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
          <h6 className="text-gray-400 text-xl my-2">
            Lorem ipsum dolor sit amet
          </h6>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperProj;
